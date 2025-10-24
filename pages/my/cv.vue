<script setup lang="ts">
const route = useRoute();
const showFooter = ref(route.query.footer ? route.query.footer === "true" : false);

definePageMeta({
    layout: "resume",
});

useHead({
    title: "CV - Christopher Andrei Tayao",
    meta: [
        { name: "description", content: "Christopher Andrei Tayao's Curriculum Vitae" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full max-h-lvh px-4 py-8">
        <iframe
            src="https://drive.google.com/file/d/1psTI9qCELxiXs6cZ3WjGX4VJMwpESRfz/preview"
            class="w-3/4 min-h-screen rounded-lg shadow-lg border"
        />
        <AppFooter v-show="showFooter" />
    </div>
</template>
