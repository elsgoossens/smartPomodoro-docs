// tests/e2e/storybook-home.spec.ts

/**
 * @file Smoke test to verify Storybook loads and the explorer is visible.
 */

import { expect, test } from "@playwright/test";

/**
 * Basic "can open Storybook" test.
 *
 * @summary Ensures the Storybook UI is reachable and rendered.
 * @requires Running or auto-started Storybook dev server (configured in playwright.config.ts).
 */
test("Storybook loads and shows explorer", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#storybook-explorer-menu")).toBeVisible();
});
