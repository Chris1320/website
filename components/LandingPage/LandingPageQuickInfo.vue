<script lang="ts" setup>
import { motion } from "motion-v";

const showToolName = ref(false);
const selectedSkillName = ref<string | null>(null);
const skill1Animation = ref({});
const skill2Animation = ref({});
const skill3Animation = ref({});
const skill4Animation = ref({});
const skill5Animation = ref({});

function handleExplodeSkill(skill: string | null) {
    console.log(`Exploding skill: ${skill}`);
    switch (skill) {
        case "py":
            selectedSkillName.value = "Python";
            skill1Animation.value = { scale: 1.5, rotate: 10, y: -10, x: 25 };
            skill2Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 40 };
            skill3Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 18 };
            skill4Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            skill5Animation.value = { scale: 0.75, rotate: 0, y: -10, x: -20 };
            showToolName.value = true;
            break;

        case "cs":
            selectedSkillName.value = "C#";
            skill1Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            skill2Animation.value = { scale: 1.5, rotate: 10, y: -10, x: 25 };
            skill3Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 40 };
            skill4Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 18 };
            skill5Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            showToolName.value = true;
            break;

        case "ts":
            selectedSkillName.value = "TypeScript";
            skill1Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -18 };
            skill2Animation.value = { scale: 0.75, rotate: -15, y: 15, x: -30 };
            skill3Animation.value = { scale: 1.5 };
            skill4Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 30 };
            skill5Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 18 };
            showToolName.value = true;
            break;

        case "vue":
            selectedSkillName.value = "Vue";
            skill1Animation.value = { scale: 0.75, rotate: 10, y: 10, x: 0 };
            skill2Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -18 };
            skill3Animation.value = { scale: 0.75, rotate: -15, y: 15, x: -40 };
            skill4Animation.value = { scale: 1.5, rotate: -10, y: -10, x: 0 };
            skill5Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 30 };
            showToolName.value = true;
            break;

        case "react":
            selectedSkillName.value = "React";
            skill1Animation.value = { scale: 0.75, rotate: 0, y: 10, x: 25 };
            skill2Animation.value = { scale: 0.75, rotate: 10, y: -10, x: 0 };
            skill3Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -18 };
            skill4Animation.value = { scale: 0.75, rotate: -15, y: 10, x: -40 };
            skill5Animation.value = { scale: 1.5, rotate: -10, y: -10, x: -25 };
            showToolName.value = true;
            break;

        default:
            selectedSkillName.value = null;
            skill1Animation.value = { scale: 1 };
            skill2Animation.value = { scale: 1 };
            skill3Animation.value = { scale: 1 };
            skill4Animation.value = { scale: 1 };
            skill5Animation.value = { scale: 1 };
            showToolName.value = true;
            break;
    }
}
</script>

<template>
    <div class="text-center min-h-dvh items-center flex flex-col justify-center px-4">
        <h3 class="text-2xl font-medium">I have extensive experience in...</h3>
        <AnimatePresence>
            <motion.h2
                v-if="showToolName"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: -20 }"
                class="text-3xl font-bold"
                style="min-height: 2.5rem"
            >
                {{ selectedSkillName }}
            </motion.h2>
            <!-- Placeholder to prevent layout shift -->
            <div v-else style="min-height: 2.5rem" />
        </AnimatePresence>
        <div class="mt-5 flex flex-row justify-center gap-1 flex-wrap pt-5 pb-10">
            <!-- NOTE: The contents here are currently hardcoded. -->
            <motion.div
                :animate="skill1Animation"
                @hover-start="handleExplodeSkill('py')"
                @hover-end="handleExplodeSkill(null)"
            >
                <Icon name="skill-icons:python-dark" size="48" />
            </motion.div>
            <motion.div
                :animate="skill2Animation"
                @hover-start="handleExplodeSkill('cs')"
                @hover-end="handleExplodeSkill(null)"
            >
                <Icon name="skill-icons:cs" size="48" />
            </motion.div>
            <motion.div
                :animate="skill3Animation"
                @hover-start="handleExplodeSkill('ts')"
                @hover-end="handleExplodeSkill(null)"
            >
                <Icon name="skill-icons:typescript" size="48" />
            </motion.div>
            <motion.div
                :animate="skill4Animation"
                @hover-start="handleExplodeSkill('vue')"
                @hover-end="handleExplodeSkill(null)"
            >
                <Icon name="skill-icons:vuejs-dark" size="48" />
            </motion.div>
            <motion.div
                :animate="skill5Animation"
                @hover-start="handleExplodeSkill('react')"
                @hover-end="handleExplodeSkill(null)"
            >
                <Icon name="skill-icons:react-dark" size="48" />
            </motion.div>
        </div>
        <NuxtLink to="/about#skills">
            <button class="btn btn-outline btn-md btn-accent">See my toolkit!</button>
        </NuxtLink>
    </div>
</template>
