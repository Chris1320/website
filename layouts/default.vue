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
        <slot />
        <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <p>&copy; 2025 Chris1320</p>
                <p>Made with 💖 using Nuxt and Tailwind CSS</p>
            </aside>
            <nav>
                <h6 class="footer-title">Contact Me</h6>
                <NuxtLink to="mailto:me@chrisfromnowhere.me" target="_blank" class="link link-hover">Email (Personal)
                </NuxtLink>
                <NuxtLink to="mailto:work@chrisfromnowhere.me" target="_blank" class="link link-hover">Email (Work)
                </NuxtLink>
                <NuxtLink to="https://matrix.to/#/@chris1320:matrix.org" target="_blank" class="link link-hover">Matrix
                </NuxtLink>
            </nav>
        </footer>
    </div>
</template>
