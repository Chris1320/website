<script lang="ts" setup>
import { motion } from "motion-v";

const showToolName = ref(false);
const skill = ref<string | null>(null);
const selectedSkillName = ref<string | null>(null);
const skill1Animation = ref({});
const skill2Animation = ref({});
const skill3Animation = ref({});
const skill4Animation = ref({});
const skill5Animation = ref({});

// const iconsLeft = [
//     "skill-icons:vuejs-dark",
//     "skill-icons:fastapi",
//     "skill-icons:lua-dark",
//     "skill-icons:nextjs-dark",
//     "skill-icons:nuxtjs-dark",
//     "skill-icons:docker",
//     "skill-icons:bash-dark",
//     "skill-icons:bun-dark",
//     "skill-icons:flask-dark",
//     "skill-icons:typescript",
// ];
// const iconsRight = [
//     "skill-icons:html",
//     "skill-icons:postgresql-dark",
//     "skill-icons:c",
//     "skill-icons:react-dark",
//     "skill-icons:javascript",
//     "skill-icons:kotlin-dark",
//     "skill-icons:tailwindcss-dark",
//     "skill-icons:css",
//     "skill-icons:mysql-dark",
//     "skill-icons:golang",
// ];

function handleExplodeSkill(_skill: string | null) {
    // Toggle off if the same skill is clicked again
    skill.value = _skill === skill.value ? null : _skill;

    console.log(`Exploding skill: ${skill.value}`);
    switch (skill.value) {
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
    <div class="min-h-dvh w-full">
        <div class="text-center min-h-dvh items-center flex flex-col justify-center px-4">
            <motion.h3
                :initial="{ opacity: 0, y: -20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                class="text-2xl font-medium"
            >
                I have extensive experience in...
            </motion.h3>
            <AnimatePresence>
                <motion.h2
                    v-if="showToolName"
                    :initial="{ opacity: 0, y: -20 }"
                    :while-in-view="{ opacity: 1, y: 0 }"
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
                <motion.div :initial="{ opacity: 0, x: -20, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill1Animation"
                        @click="handleExplodeSkill('py')"
                        @hover-start="handleExplodeSkill('py')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon name="skill-icons:python-dark" size="48" />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: -20, y: -10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill2Animation"
                        @click="handleExplodeSkill('cs')"
                        @hover-start="handleExplodeSkill('cs')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon name="skill-icons:cs" size="48" />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill3Animation"
                        @click="handleExplodeSkill('ts')"
                        @hover-start="handleExplodeSkill('ts')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon name="skill-icons:typescript" size="48" />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: 20, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill4Animation"
                        @click="handleExplodeSkill('vue')"
                        @hover-start="handleExplodeSkill('vue')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon name="skill-icons:vuejs-dark" size="48" />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: 20, y: -10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill5Animation"
                        @click="handleExplodeSkill('react')"
                        @hover-start="handleExplodeSkill('react')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon name="skill-icons:react-dark" size="48" />
                    </motion.div>
                </motion.div>
            </div>
            <NuxtLink to="/about#skills">
                <motion.button
                    :initial="{ opacity: 0, y: -20 }"
                    :while-in-view="{ opacity: 1, y: 0 }"
                    :while-hover="{ scale: 1.25, rotate: 5 }"
                    class="btn btn-outline btn-md btn-accent"
                    >See my toolkit!</motion.button
                >
            </NuxtLink>
        </div>
    </div>
</template>
