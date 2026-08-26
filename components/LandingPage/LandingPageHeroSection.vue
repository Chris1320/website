<script setup lang="ts">
import { motion, easeInOut } from "motion-v";

function openContactModal() {
    const dialog = document.getElementById("contact-modal") as HTMLDialogElement | null;
    if (dialog) dialog.showModal();
}

const animationTitleLeftInitial = { y: -80, opacity: 0 } as const;
const animationTitleLeftAnimate = {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14, delay: 0.2 },
} as const;

const animationTitleRightInitial = { x: 100, opacity: 0 } as const;
const animationTitleRightAnimate = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 15, delay: 0.75 },
} as const;

const animationHandInitial = { scale: 0, opacity: 0 } as const;
const animationHandAnimate = {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 220, damping: 12, delay: 1.3 },
} as const;
const animationWaveInitial = { rotate: 0 } as const;
const animationWaveAnimate = {
    rotate: [0, 20, -20, 20, -20, 0],
    transition: { duration: 1.5, ease: easeInOut, repeat: Infinity, repeatDelay: 2.5, delay: 1.65 },
};
const animationInitial = { y: 20, opacity: 0 } as const;
const animationAnimate = {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut, delay: 1.5 },
};
const animationButtonWhileHover = { scale: 1.1 } as const;
const animationButtonWhilePress = { scale: 0.95, rotate: -3 } as const;
</script>

<template>
    <section id="welcome" class="hero bg-transparent min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-2xl">
                <div class="flex flex-row justify-center items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                    <motion.h1
                        :layout="true"
                        :initial="animationTitleLeftInitial"
                        :animate="animationTitleLeftAnimate"
                        class="text-4xl sm:text-5xl font-bold whitespace-nowrap"
                    >
                        Hi!
                    </motion.h1>
                    <motion.div
                        :layout="true"
                        class="inline-block origin-center"
                        :initial="animationHandInitial"
                        :animate="animationHandAnimate"
                        :drag="true"
                        :drag-elastic="{ top: 0.25, left: 0.25, right: 0.25, bottom: 0.25 }"
                        :drag-constraints="{ top: 0, left: 0, right: 0, bottom: 0 }"
                    >
                        <motion.span
                            :initial="animationWaveInitial"
                            :animate="animationWaveAnimate"
                            class="text-4xl sm:text-5xl font-bold inline-block origin-bottom-right"
                        >
                            👋
                        </motion.span>
                    </motion.div>
                    <motion.h1
                        :layout="true"
                        :initial="animationTitleRightInitial"
                        :animate="animationTitleRightAnimate"
                        class="text-4xl sm:text-5xl font-bold whitespace-nowrap"
                    >
                        I'm <span class="text-accent">Chris</span>
                    </motion.h1>
                </div>
                <motion.p :initial="animationInitial" :animate="animationAnimate" class="pt-8">
                    I am a full-stack software developer, trying to automate a lot of boring stuff. I like doing random
                    things that are related to computers and technology.
                </motion.p>
                <div class="flex flex-row justify-center items-center gap-5 py-4">
                    <div class="tooltip tooltip-bottom" data-tip="LinkedIn">
                        <NuxtLink to="https://www.linkedin.com/in/christopherandreitayao" target="_blank" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="mdi:linkedin" size="50" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="GitHub">
                        <NuxtLink to="https://github.com/Chris1320" target="_blank" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="mdi:github-box" size="50" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Email">
                        <NuxtLink to="mailto:chris.tayao@chrisfromnowhere.me" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="material-symbols:mail" size="50" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                </div>
                <motion.div :initial="animationInitial" :animate="animationAnimate" class="pt-4">
                    <div class="m-0">
                        <motion.button
                            :initial="{ opacity: 0, y: -20 }"
                            :while-in-view="{ opacity: 1, y: 0 }"
                            :while-hover="{ scale: 1.25, rotate: -5 }"
                            :while-press="animationButtonWhilePress"
                            class="btn btn-accent btn-lg"
                            @click="openContactModal"
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </motion.div>

                <dialog id="contact-modal" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div class="modal-action"><AboutContactMe /></div>
                    </div>
                </dialog>
            </div>
        </div>
    </section>
</template>
