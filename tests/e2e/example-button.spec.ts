// tests/e2e/example-button.spec.ts
import { expect, test } from "@playwright/test";
import { getCanvas, openStory, waitForStoryReady } from "./helpers/storybook";

test("Primary Button: default state", async ({ page }) => {
  // 1) juiste story-id
  await openStory(page, "example-button--primary");

  await waitForStoryReady(page);

  const canvas = getCanvas(page);

  // 2) assert op de knop zelf (of op je label als je die zet in args)
  const button = canvas.getByRole("button"); // generiek
  // of: const button = canvas.getByRole('button', { name: /button/i });

  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
});
