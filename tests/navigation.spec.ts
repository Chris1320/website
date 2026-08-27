import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Navigation", () => {
    test("load landing page", async ({ page, goto }) => {
        await goto("/", { waitUntil: "hydration" });
        await expect(page).toHaveTitle(/ChrisFromNowhere/i);

        const heroHeading = page.locator("#welcome h1").filter({ hasText: "Hi!" });
        await expect(heroHeading).toBeVisible();
    });

    test("toggle theme", async ({ page, goto }) => {
        await goto("/", { waitUntil: "hydration" });

        const themeBtn = page.getByRole("button", { name: "Toggle Theme" });
        await expect(themeBtn).toBeVisible();

        const htmlElement = page.locator("html");
        const initialTheme = (await htmlElement.getAttribute("data-theme")) || "light";

        await themeBtn.click();
        const nextTheme = initialTheme === "dark" ? "light" : "dark";
        await expect(htmlElement).toHaveAttribute("data-theme", nextTheme);

        await themeBtn.click();
        await expect(htmlElement).toHaveAttribute("data-theme", initialTheme);
    });

    test("sections navigation", async ({ page, goto }) => {
        await goto("/", { waitUntil: "hydration" });

        const nav = page.locator("header nav, nav").first();
        const aboutLink = nav.getByRole("link", { name: "About" }).first();

        if (await aboutLink.isVisible()) {
            await aboutLink.click();
            await expect(page.locator("#about")).toBeInViewport();
        }
    });

    test("mobile navigation", async ({ page, goto }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await goto("/", { waitUntil: "hydration" });

        const menuButton = page.getByRole("button", { name: "Toggle Navigation Menu" });
        await expect(menuButton).toBeVisible();

        await menuButton.click();
        const mobileDropdown = page.locator(".md\\:hidden.bg-base-100");
        await expect(mobileDropdown).toBeVisible();

        await menuButton.click();
        await expect(mobileDropdown).not.toBeVisible();
    });
});
