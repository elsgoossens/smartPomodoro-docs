// playwright.config.ts

/**
 * @file Playwright configuration for running end-to-end tests
 * against the local Storybook instance (port 6006).
 *
 * @see https://playwright.dev/docs/test-configuration
 * @see https://storybook.js.org/docs
 */
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /**
   * Directory that contains all E2E tests.
   * @type {string}
   */
  testDir: './tests/e2e',

  /** Run test files in parallel. */
  fullyParallel: true,

  /** Prevent committed `test.only` on CI. */
  forbidOnly: !!process.env.CI,

  /** Retries only on CI. */
  retries: process.env.CI ? 2 : 0,

  /** Opt out of parallel workers on CI. */
  workers: process.env.CI ? 1 : undefined,

  /** @see https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /**
   * Shared defaults for all projects/browsers.
   * @type {import('@playwright/test').PlaywrightTestOptions}
   */
  use: {
    /**
     * Base URL for `page.goto('')` and relative navigations.
     * Points to Storybook’s dev server.
     */
    baseURL: 'http://localhost:6006',

    /** Collect traces on first retry for easier debugging. */
    trace: 'on-first-retry',

    /** Store screenshots only when a test fails. */
    screenshot: 'only-on-failure',

    /** Keep videos on CI failures, otherwise on first retry. */
    video: process.env.CI ? 'retain-on-failure' : 'on-first-retry',
  },

  /**
   * Browser matrix.
   * @type {import('@playwright/test').Projects}
   */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],

  /**
   * Start or reuse the Storybook dev server before tests.
   * Playwright waits until the URL responds.
   */
  webServer: {
    // If you have an npm script named "storybook", you can use: 'npm run storybook'
    command: 'storybook dev -p 6006',
    url: 'http://localhost:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
