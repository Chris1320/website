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
        <div class="hero-content text-center w-full">
            <div class="max-w-4xl w-full">
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
                <motion.div
                    :initial="animationInitial"
                    :animate="animationAnimate"
                    class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center pt-8 text-left"
                >
                    <div class="md:col-span-5 flex flex-col items-center md:items-stretch gap-3">
                        <motion.button
                            :while-hover="animationButtonWhileHover"
                            :while-press="animationButtonWhilePress"
                            class="btn btn-accent btn-md sm:btn-lg w-full max-w-xs shadow-md font-mono"
                            @click="openContactModal"
                        >
                            <Icon name="material-symbols:mail-outline" size="20" />
                            <span>Contact Me</span>
                        </motion.button>
                        <NuxtLink to="/my/cv" class="w-full max-w-xs">
                            <motion.button
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="btn btn-outline btn-accent btn-md sm:btn-lg w-full shadow-sm font-mono"
                            >
                                <Icon name="material-symbols:download" size="20" />
                                <span>View My CV</span>
                            </motion.button>
                        </NuxtLink>
                    </div>
                    <div class="md:col-span-7 flex flex-col justify-center space-y-4">
                        <p class="text-justify text-sm sm:text-base leading-relaxed text-base-content/90 font-mono">
                            I am a full-stack <span class="text-accent underline">software engineer</span> building
                            automated data pipelines, modern web applications, and reliable backend systems. I like
                            solving interesting and complex problems. Let's talk!
                        </p>
                        <div class="flex flex-row justify-center md:justify-start items-center gap-4 pt-1">
                            <div class="tooltip tooltip-bottom" data-tip="LinkedIn">
                                <NuxtLink
                                    to="https://www.linkedin.com/in/christopherandreitayao"
                                    target="_blank"
                                    class="m-0 text-base-content/80 hover:text-primary transition-colors"
                                >
                                    <motion.div
                                        :while-hover="animationButtonWhileHover"
                                        :while-press="animationButtonWhilePress"
                                        class="flex flex-col justify-center items-center"
                                    >
                                        <Icon name="mdi:linkedin" size="36" />
                                    </motion.div>
                                </NuxtLink>
                            </div>
                            <div class="tooltip tooltip-bottom" data-tip="GitHub">
                                <NuxtLink
                                    to="https://github.com/Chris1320"
                                    target="_blank"
                                    class="m-0 text-base-content/80 hover:text-primary transition-colors"
                                >
                                    <motion.div
                                        :while-hover="animationButtonWhileHover"
                                        :while-press="animationButtonWhilePress"
                                        class="flex flex-col justify-center items-center"
                                    >
                                        <Icon name="mdi:github-box" size="36" />
                                    </motion.div>
                                </NuxtLink>
                            </div>
                            <div class="tooltip tooltip-bottom" data-tip="Blog">
                                <NuxtLink
                                    to="https://677078.xyz"
                                    class="m-0 text-base-content/80 hover:text-primary transition-colors"
                                >
                                    <motion.div
                                        :while-hover="animationButtonWhileHover"
                                        :while-press="animationButtonWhilePress"
                                        class="flex flex-col justify-center items-center"
                                    >
                                        <Icon name="mdi:blog" size="36" />
                                    </motion.div>
                                </NuxtLink>
                            </div>
                            <div class="tooltip tooltip-bottom" data-tip="Email">
                                <NuxtLink
                                    to="mailto:chris.tayao@chrisfromnowhere.me"
                                    class="m-0 text-base-content/80 hover:text-primary transition-colors"
                                >
                                    <motion.div
                                        :while-hover="animationButtonWhileHover"
                                        :while-press="animationButtonWhilePress"
                                        class="flex flex-col justify-center items-center"
                                    >
                                        <Icon name="mdi:email" size="36" />
                                    </motion.div>
                                </NuxtLink>
                            </div>
                        </div>
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
