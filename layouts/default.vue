<script setup lang="ts">
const { theme, initTheme } = useTheme();

onMounted(() => {
    initTheme();
});

useHead({
    title: "ChrisFromNowhere",
    htmlAttrs: {
        "data-theme": computed(() => theme.value),
        lang: "en",
    },
    meta: [
        { name: "description", content: "My Personal Website | ChrisFromNowhere" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: computed(() => (theme.value === "dark" ? "#1e1e2e" : "#eff1f5")) },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>
<template>
    <div
        :data-theme="theme"
        class="min-h-screen bg-base-100 text-base-content font-mono selection:bg-primary selection:text-primary-content transition-colors duration-200"
    >
        <NuxtRouteAnnouncer />
        <AppNavbar />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
