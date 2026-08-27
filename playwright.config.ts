import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig<ConfigOptions>({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: "html",
    use: {
        baseURL: "http://localhost:3000",
        trace: "on-first-retry",
        nuxt: {
            host: "http://localhost:3000",
        },
    },
    webServer: {
        command: "bun run dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
    ],
});
