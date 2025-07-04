<script setup lang="ts">
useHead({
    title: "Chris1320",
    meta: [
        { name: "description", content: "Chris1320's personal website" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});

function openLink(url: string, newTab: boolean = true) {
    window.open(url, newTab ? "_blank" : "_self");
}
</script>
<template>
    <NuxtRouteAnnouncer />
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hi! 👋</h1>
                <p class="pt-8">
                    I&apos;m currently building this site. There&apos;s nothing to see here yet. You should check back
                    later, though!
                </p>
                <p class="pb-7">In the meantime, you can check out my profiles on other platforms:</p>
                <button class="btn btn-primary" @click="openLink('https://github.com/Chris1320', true)">GitHub</button>
            </div>
        </div>
    </div>
</template>
