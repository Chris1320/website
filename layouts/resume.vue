<script setup lang="ts">
useHead({
    title: "Resume - Christopher Andrei Tayao",
    meta: [
        { name: "description", content: "Christopher Andrei Tayao's Resume" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>

<template>
    <div class="bg-[#EDECE6] text-[#1C1D1D] min-h-screen min-w-screen p-0 m-0">
        <slot />
    </div>
</template>
