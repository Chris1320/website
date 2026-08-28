import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: {
        enabled: true,
        timeline: { enabled: true },
    },
    telemetry: false,
    css: ["~/assets/css/main.css"],
    modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/icon", "motion-v/nuxt", "@nuxt/fonts"],
    fonts: {
        families: [{ name: "JetBrains Mono", provider: "google" }],
    },
    vite: { plugins: [tailwindcss()] },
    nitro: {
        preset: "cloudflare_module",
        prerender: {
            crawlLinks: true,
            routes: ["/", "/projects", "/my/cv"],
        },
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
                observability: {
                    logs: {
                        enabled: true,
                        head_sampling_rate: 1,
                        invocation_logs: true,
                    },
                },
            },
            deployConfig: true,
            nodeCompat: true,
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            htmlAttrs: { lang: "en" },
            title: "ChrisFromNowhere",
            meta: [
                { name: "description", content: "My Personal Website | ChrisFromNowhere" },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "ChrisFromNowhere" },
                { property: "og:title", content: "ChrisFromNowhere" },
                { property: "og:description", content: "My Personal Website | ChrisFromNowhere" },
                { property: "og:image", content: "https://assets.chrisfromnowhere.me/banner.webp" },
                { property: "og:url", content: "https://chrisfromnowhere.me" },
                { property: "twitter:card", content: "summary_large_image" },
                { property: "twitter:title", content: "ChrisFromNowhere" },
                { property: "twitter:description", content: "My Personal Website | ChrisFromNowhere" },
                { property: "twitter:image", content: "https://assets.chrisfromnowhere.me/banner.webp" },
            ],
            link: [{ rel: "canonical", href: "https://chrisfromnowhere.me" }],
        },
    },
    components: true,
    routeRules: {
        "/**": { swr: 3600, cache: { maxAge: 3600 } },
        "/api/health": { cache: false },
    },
});
