import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("CV page", () => {
    test("render CV viewer", async ({ page, goto }) => {
        await goto("/my/cv", { waitUntil: "hydration" });
        await expect(page).toHaveTitle(/CV - Christopher Andrei Tayao/i);

        const iframe = page.locator("iframe");
        await expect(iframe).toBeVisible();
        await expect(iframe).toHaveAttribute("src", /drive\.google\.com/);
    });

    test("render footer based on query parameter", async ({ page, goto }) => {
        await goto("/my/cv", { waitUntil: "hydration" });
        await expect(page.locator("footer")).not.toBeVisible();

        await goto("/my/cv?footer=true", { waitUntil: "hydration" });
        await expect(page.locator("footer")).toBeVisible();
    });
});
