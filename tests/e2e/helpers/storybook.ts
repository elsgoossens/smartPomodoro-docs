// tests/e2e/helpers/storybook.ts

/**
 * @file Tiny Storybook helpers for Playwright tests.
 */

import type { Locator, Page } from "@playwright/test";

/**
 * Opens a specific Storybook story via the iframe route.
 *
 * @param {Page} page - Playwright page.
 * @param {string} id - The Storybook story id (e.g. "buttons-primary--default").
 * @returns {Promise<void>}
 * @example
 * await openStory(page, 'buttons-primary--default');
 */
export async function openStory(page: Page, id: string): Promise<void> {
  await page.goto(`/iframe.html?id=${encodeURIComponent(id)}`);
}

/**
 * Returns a locator for the story's canvas root.
 * This typically targets the element that contains the rendered story.
 *
 * @param {Page} page - Playwright page.
 * @returns {Locator} Locator for the story canvas container.
 * @example
 * const canvas = getCanvas(page);
 * await expect(canvas).toBeVisible();
 */
export function getCanvas(page: Page): Locator {
  // Adjust if your stories render inside a different selector.
  return page.locator("#root, #storybook-root, body");
}

/**
 * Waits until the story is considered "ready" by checking for a stable layout.
 * Useful when stories load async data or fonts.
 *
 * @param {Page} page - Playwright page.
 * @param {number} [timeout=5000] - Max wait time in milliseconds.
 * @returns {Promise<void>}
 * @example
 * await waitForStoryReady(page, 8000);
 */
export async function waitForStoryReady(
  page: Page,
  timeout = 5000
): Promise<void> {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(100); // small paint settle
  await page.waitForFunction(
    () => (document.fonts ? (document as any).fonts.status === "loaded" : true),
    { timeout }
  );
}
