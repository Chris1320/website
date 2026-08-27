import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Contact Me modal", () => {
    test.beforeEach(async ({ goto }) => {
        await goto("/", { waitUntil: "hydration" });
    });

    test("open contact modal", async ({ page }) => {
        const contactBtn = page.getByRole("button", { name: "Contact Me" });
        await expect(contactBtn).toBeVisible();
        await contactBtn.click();

        await expect(page.locator("dialog#contact-modal")).toHaveAttribute("open", "");
        await expect(page.locator("#contact-form")).toBeVisible();
    });

    test("validate required fields and mock successful submission", async ({ page }) => {
        await page.route("**/webhook/*", async (route) => {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({ success: true }),
            });
        });

        const contactBtn = page.getByRole("button", { name: "Contact Me" });
        await expect(contactBtn).toBeVisible();
        await contactBtn.click();

        const nameInput = page.locator("#name");
        await expect(nameInput).toBeVisible();

        await nameInput.fill("QA Automated Tester");
        await page.locator("#email").fill("qa-tester@example.com");
        await page.locator("#reason").selectOption("Other");
        await page.locator("#message").fill("The quick brown fox jumps over the lazy dog.");

        await page.locator('#contact-form button[type="submit"]').click();
        await expect(page.locator(".alert-success")).toBeVisible();
        await expect(page.locator(".alert-success")).toContainText("Message sent. I'll be in touch soon.");
    });
});
