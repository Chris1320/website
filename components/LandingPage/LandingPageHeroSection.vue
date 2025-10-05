<script setup lang="ts">
import { motion, easeInOut } from "motion-v";

const animationTitleLeftInitial = { x: -25, opacity: 0 };
const animationTitleLeftAnimate = {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
};
const animationTitleRightInitial = { x: 25, opacity: 0 };
const animationTitleRightAnimate = {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
};
const animationHandInitial = { y: -25, opacity: 0 };
const animationHandAnimate = {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
};
const animationWaveInitial = { rotate: 0 };
const animationWaveAnimate = {
    rotate: [0, 20, -20, 20, -20, 0],
    transition: { duration: 2, ease: easeInOut, repeat: Infinity, repeatDelay: 3 },
};
const animationInitial = { y: -25, opacity: 0 };
const animationAnimate = {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeInOut },
};
const animationButtonWhileHover = { scale: 1.1 };
const animationButtonWhilePress = { scale: 0.95 };
</script>

<template>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <div class="flex flex-row justify-center items-center gap-4">
                    <motion.h1
                        :initial="animationTitleLeftInitial"
                        :animate="animationTitleLeftAnimate"
                        class="text-5xl font-bold"
                    >
                        Hi!
                    </motion.h1>
                    <motion.div
                        class="inline-block"
                        :initial="animationHandInitial"
                        :animate="animationHandAnimate"
                        :drag="true"
                        :drag-elastic="{ top: 0.25, left: 0.25, right: 0.25, bottom: 0.25 }"
                        :drag-constraints="{ top: 0, left: 0, right: 0, bottom: 0 }"
                    >
                        <motion.span
                            :initial="animationWaveInitial"
                            :animate="animationWaveAnimate"
                            class="text-5xl font-bold inline-block"
                        >
                            👋
                        </motion.span>
                    </motion.div>
                    <motion.h1
                        :initial="animationTitleRightInitial"
                        :animate="animationTitleRightAnimate"
                        class="text-5xl font-bold"
                    >
                        I am <span class="text-accent">Chris</span>
                    </motion.h1>
                </div>
                <motion.p :initial="animationInitial" :animate="animationAnimate" class="pt-8">
                    I am currently a BS Computer Science student, aiming to be a full-stack developer. I like doing
                    random things that are related to computers and technology.
                </motion.p>
                <div class="flex flex-row justify-center items-center gap-10 py-4">
                    <div class="tooltip tooltip-bottom" data-tip="LinkedIn">
                        <NuxtLink to="https://www.linkedin.com/in/christopherandreitayao" target="_blank" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="mdi:linkedin" size="75" />
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
                                <Icon name="mdi:github-box" size="75" />
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
                                <Icon name="material-symbols:mail" size="75" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
