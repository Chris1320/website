import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Projects page", () => {
    test("render projects catalog", async ({ page, goto }) => {
        await goto("/projects", { waitUntil: "hydration" });
        await expect(page.locator("h1")).toHaveText(/Projects/i);

        const toggleView = page.locator('input[type="checkbox"].toggle');
        await expect(toggleView).toBeVisible();

        const initialItems = page.locator(".container > div > div");
        await expect(initialItems.first()).toBeVisible();

        await toggleView.click();
        await expect(page.locator("table.table")).toBeVisible();

        await toggleView.click();
        await expect(page.locator("table.table")).not.toBeVisible();
    });

    test("navigate to a valid project detail page", async ({ page, goto }) => {
        await goto("/project/reconnected", { waitUntil: "hydration" });
        await expect(page.locator("h1, h2").filter({ hasText: "ReconnectED" })).toBeVisible();
    });

    test("display error screen when navigating to a non-existent project", async ({ page, goto }) => {
        await goto("/project/non-existent-project-id", { waitUntil: "hydration" });
        await expect(page.getByText("Project not found")).toBeVisible();
        await expect(page.getByText("No project with ID 'non-existent-project-id' was found.")).toBeVisible();
    });
});
