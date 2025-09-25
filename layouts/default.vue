<script setup lang="ts">
useHead({
    title: "Chris1320",
    meta: [
        { name: "description", content: "Chris1320's Personal Website" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>
<template>
    <div>
        <NuxtRouteAnnouncer />
        <AppMenu />
        <slot />
        <AppFooter />
    </div>
</template>
