<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hi! 👋 I am Chris</h1>
                <p class="pt-8">
                    I am currently a BS Computer Science student, aiming to be a full-stack developer. I like doing
                    random things that are related to computers and technology.
                </p>
                <p class="pt-10">You can contact me in the following platforms:</p>
                <div class="flex flex-row justify-center items-center gap-10 py-4">
                    <div class="tooltip tooltip-bottom" data-tip="Personal Email">
                        <NuxtLink to="mailto:me@chrisfromnowhere.me" target="_blank" class="m-0">
                            <motion.div
                                :while-hover="{ scale: 1.1 }"
                                :while-press="{ scale: 0.95 }"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="mdi:email-outline" size="75" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Matrix">
                        <NuxtLink to="https://matrix.to/#/@chris1320:matrix.org" target="_blank" class="m-0">
                            <motion.div
                                :while-hover="{ scale: 1.1 }"
                                :while-press="{ scale: 0.95 }"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="tabler:brand-matrix" size="75" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="LinkedIn">
                        <NuxtLink
                            to="https://www.linkedin.com/in/christopher-andrei-tayao-60a870373/"
                            target="_blank"
                            class="m-0"
                        >
                            <motion.div
                                :while-hover="{ scale: 1.1 }"
                                :while-press="{ scale: 0.95 }"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="tabler:brand-linkedin" size="75" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
