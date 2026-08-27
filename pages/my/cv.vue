<script setup lang="ts">
const { theme, initTheme } = useTheme();

if (import.meta.client) {
    initTheme();
}

onMounted(() => {
    initTheme();
});

useHead({
    title: "CV | Christopher Andrei Tayao",
    htmlAttrs: {
        "data-theme": computed(() => theme.value),
        lang: "en",
    },
    meta: [
        { name: "description", content: "Christopher Andrei Tayao's Curriculum Vitae" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: computed(() => (theme.value === "dark" ? "#1e1e2e" : "#eff1f5")) },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>

<template>
    <div :data-theme="theme" class="flex flex-col justify-center items-center w-full px-4 pt-2 pb-8">
        <iframe
            src="https://drive.google.com/file/d/1psTI9qCELxiXs6cZ3WjGX4VJMwpESRfz/preview"
            class="w-3/4 min-h-screen rounded-lg shadow-lg border"
        />
    </div>
</template>
