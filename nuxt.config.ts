import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: {
        enabled: true,
        timeline: { enabled: true },
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/icon", "motion-v/nuxt", "@nuxt/fonts"],
    vite: { plugins: [tailwindcss()] },
    nitro: {
        preset: "cloudflare_module",
        cloudflare: {
            wrangler: {
                name: "personal-website",
                routes: [
                    {
                        pattern: "chrisfromnowhere.me",
                        custom_domain: true,
                    },
                ],
                placement: { mode: "smart" },
                workers_dev: false,
                preview_urls: false,
            },
            deployConfig: true,
            nodeCompat: true,
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    components: true,
});
