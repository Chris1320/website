<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
            <p>&copy; 2025 Chris1320</p>
            <p>
                Made with
                <motion.span
                    :drag="true"
                    :drag-elastic="{ top: 0.25, left: 0.25, right: 0.25, bottom: 0.25 }"
                    :drag-constraints="{ top: 0, left: 0, right: 0, bottom: 0 }"
                    class="inline-block"
                    >💖</motion.span
                >
                using Nuxt and Tailwind CSS
            </p>
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
        <nav>
            <h6 class="footer-title">External Links</h6>
            <NuxtLink to="https://github.com/Chris1320" target="_blank" class="link link-hover">GitHub</NuxtLink>
            <NuxtLink
                to="https://www.linkedin.com/in/christopher-andrei-tayao-60a870373/"
                target="_blank"
                class="link link-hover"
                >LinkedIn
            </NuxtLink>
            <NuxtLink to="https://www.credly.com/users/cfn" target="_blank" class="link link-hover">Credly</NuxtLink>
        </nav>
    </footer>
</template>
