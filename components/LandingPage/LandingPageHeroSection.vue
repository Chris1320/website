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
                    <motion.div :initial="animationHandInitial" :animate="animationHandAnimate" class="inline-block">
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
                        I am Chris
                    </motion.h1>
                </div>
                <motion.p :initial="animationInitial" :animate="animationAnimate" class="pt-8">
                    I am currently a BS Computer Science student, aiming to be a full-stack developer. I like doing
                    random things that are related to computers and technology.
                </motion.p>
                <motion.p :initial="animationInitial" :animate="animationAnimate" class="pt-10">
                    You can contact me in the following platforms:
                </motion.p>
                <div class="flex flex-row justify-center items-center gap-10 py-4">
                    <div class="tooltip tooltip-bottom" data-tip="Personal Email">
                        <NuxtLink to="mailto:me@chrisfromnowhere.me" target="_blank" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
                                class="flex flex-col justify-center items-center"
                            >
                                <Icon name="mdi:email-outline" size="75" />
                            </motion.div>
                        </NuxtLink>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Matrix">
                        <NuxtLink to="https://matrix.to/#/@chris1320:matrix.org" target="_blank" class="m-0">
                            <motion.div
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
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
                                :initial="animationInitial"
                                :animate="animationAnimate"
                                :while-hover="animationButtonWhileHover"
                                :while-press="animationButtonWhilePress"
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
