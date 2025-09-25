<template>
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
            <p>&copy; 2025 Chris1320</p>
            <p>Made with 💖 using Nuxt and Tailwind CSS</p>
        </aside>
        <nav>
            <h6 class="footer-title">Contact Me</h6>
            <NuxtLink to="mailto:me@chrisfromnowhere.me" target="_blank" class="link link-hover"
                >Email (Personal)
            </NuxtLink>
            <NuxtLink to="mailto:work@chrisfromnowhere.me" target="_blank" class="link link-hover"
                >Email (Work)
            </NuxtLink>
            <NuxtLink to="https://matrix.to/#/@chris1320:matrix.org" target="_blank" class="link link-hover"
                >Matrix
            </NuxtLink>
        </nav>
        <nav>
            <h6 class="footer-title">Resources</h6>
            <NuxtLink to="/projects" class="link link-hover">Projects</NuxtLink>
            <NuxtLink to="/blog" class="link link-hover">Blog</NuxtLink>
            <NuxtLink to="/about" class="link link-hover">About Me</NuxtLink>
        </nav>
    </footer>
</template>
