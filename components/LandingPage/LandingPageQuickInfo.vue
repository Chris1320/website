<script lang="ts" setup>
import { AnimatePresence, motion } from "motion-v";
import type { Tool, ToolkitCategory } from "~/utils/models/toolkit";

import rawToolkit from "~/public/data/toolkit.json";

const { theme } = useTheme();
const categories = rawToolkit as ToolkitCategory[];

const skill = ref<string | null>(null);
const selectedSkillName = ref<string | null>(null);
const skillNameAnimation = ref({ opacity: 1, y: -20 });
const skill1Animation = ref({});
const skill2Animation = ref({});
const skill3Animation = ref({});
const skill4Animation = ref({});
const skill5Animation = ref({});
const skillExplodedAtleastOnce = ref(false);

function getToolIcon(tool: Tool): string {
    return theme.value === "dark" ? tool.icon.dark : tool.icon.light;
}

function handleExplodeSkill(_skill: string | null) {
    skill.value = _skill === skill.value ? null : _skill;
    skillExplodedAtleastOnce.value = true;

    switch (skill.value) {
        case "py":
            selectedSkillName.value = "Python";
            skill1Animation.value = { scale: 1.5, rotate: 10, y: -10, x: 25 };
            skill2Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 40 };
            skill3Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 18 };
            skill4Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            skill5Animation.value = { scale: 0.75, rotate: 0, y: -10, x: -20 };
            skillNameAnimation.value = { opacity: 1, y: 0 };
            break;

        case "cs":
            selectedSkillName.value = "Go";
            skill1Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            skill2Animation.value = { scale: 1.5, rotate: 10, y: -10, x: 25 };
            skill3Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 40 };
            skill4Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 18 };
            skill5Animation.value = { scale: 0.75, rotate: -10, y: -10, x: 0 };
            skillNameAnimation.value = { opacity: 1, y: 0 };
            break;

        case "ts":
            selectedSkillName.value = "TypeScript";
            skill1Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -12 };
            skill2Animation.value = { scale: 0.75, rotate: -15, y: 15, x: -30 };
            skill3Animation.value = { scale: 1.5 };
            skill4Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 30 };
            skill5Animation.value = { scale: 0.75, rotate: 5, y: 0, x: 12 };
            skillNameAnimation.value = { opacity: 1, y: 0 };
            break;

        case "vue":
            selectedSkillName.value = "Vue";
            skill1Animation.value = { scale: 0.75, rotate: 10, y: 10, x: 0 };
            skill2Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -18 };
            skill3Animation.value = { scale: 0.75, rotate: -15, y: 15, x: -40 };
            skill4Animation.value = { scale: 1.5, rotate: -10, y: -10, x: 0 };
            skill5Animation.value = { scale: 0.75, rotate: 15, y: -15, x: 30 };
            skillNameAnimation.value = { opacity: 1, y: 0 };
            break;

        case "react":
            selectedSkillName.value = "React";
            skill1Animation.value = { scale: 0.75, rotate: 0, y: 10, x: 25 };
            skill2Animation.value = { scale: 0.75, rotate: 10, y: -10, x: 0 };
            skill3Animation.value = { scale: 0.75, rotate: -5, y: 0, x: -18 };
            skill4Animation.value = { scale: 0.75, rotate: -15, y: 10, x: -40 };
            skill5Animation.value = { scale: 1.5, rotate: -10, y: -10, x: -25 };
            skillNameAnimation.value = { opacity: 1, y: 0 };
            break;

        default:
            skill1Animation.value = { scale: 1 };
            skill2Animation.value = { scale: 1 };
            skill3Animation.value = { scale: 1 };
            skill4Animation.value = { scale: 1 };
            skill5Animation.value = { scale: 1 };
            skillNameAnimation.value = { opacity: 0, y: 20 };
            break;
    }
}
</script>
<template>
    <div class="text-center items-center flex flex-col justify-center px-4 my-10 font-mono">
        <motion.h3
            :initial="{ opacity: 0, y: -20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            class="text-xl sm:text-2xl font-medium text-base-content"
        >
            I have extensive experience in...
        </motion.h3>
        <AnimatePresence>
            <motion.h2
                :initial="{ opacity: 0, y: -20 }"
                :animate="skillNameAnimation"
                :exit="{ opacity: 0, y: -20 }"
                class="text-2xl sm:text-3xl font-bold text-primary"
                style="min-height: 2.5rem"
            >
                {{ selectedSkillName }}
            </motion.h2>
        </AnimatePresence>
        <div class="relative inline-flex items-center justify-center">
            <div class="mt-5 flex flex-row justify-center gap-1 flex-wrap pt-2 pb-8">
                <motion.div :initial="{ opacity: 0, x: -20, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill1Animation"
                        class="cursor-pointer"
                        @click="handleExplodeSkill('py')"
                        @hover-start="handleExplodeSkill('py')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon
                            :name="
                                getToolIcon({
                                    name: 'python',
                                    icon: { light: 'skill-icons:python-dark', dark: 'catppuccin:python' },
                                })
                            "
                            size="44"
                        />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: -20, y: -10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill2Animation"
                        class="cursor-pointer"
                        @click="handleExplodeSkill('cs')"
                        @hover-start="handleExplodeSkill('cs')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon
                            :name="
                                getToolIcon({
                                    name: 'go',
                                    icon: { light: 'skill-icons:golang', dark: 'catppuccin:go' },
                                })
                            "
                            size="44"
                        />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill3Animation"
                        class="cursor-pointer"
                        @click="handleExplodeSkill('ts')"
                        @hover-start="handleExplodeSkill('ts')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon
                            :name="
                                getToolIcon({
                                    name: 'typescript',
                                    icon: { light: 'skill-icons:typescript', dark: 'catppuccin:typescript' },
                                })
                            "
                            size="44"
                        />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: 20, y: 10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill4Animation"
                        class="cursor-pointer"
                        @click="handleExplodeSkill('vue')"
                        @hover-start="handleExplodeSkill('vue')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon
                            :name="
                                getToolIcon({
                                    name: 'vue',
                                    icon: { light: 'skill-icons:vuejs-dark', dark: 'catppuccin:vue' },
                                })
                            "
                            size="44"
                        />
                    </motion.div>
                </motion.div>
                <motion.div :initial="{ opacity: 0, x: 20, y: -10 }" :while-in-view="{ opacity: 1, x: 0, y: 0 }">
                    <motion.div
                        :animate="skill5Animation"
                        class="cursor-pointer"
                        @click="handleExplodeSkill('react')"
                        @hover-start="handleExplodeSkill('react')"
                        @hover-end="handleExplodeSkill(null)"
                    >
                        <Icon
                            :name="
                                getToolIcon({
                                    name: 'react',
                                    icon: { light: 'skill-icons:react-dark', dark: 'catppuccin:typescript-react' },
                                })
                            "
                            size="44"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                class="absolute left-full top-2 ml-3 hidden sm:flex flex-col items-start text-base-content/50 select-none pointer-events-none whitespace-nowrap"
                :initial="{ opacity: 0, y: -10 }"
                :animate="{
                    opacity: !skillExplodedAtleastOnce ? 1 : 0,
                    y: !skillExplodedAtleastOnce ? 0 : -10,
                    transition: { duration: 0.25, ease: 'easeInOut' },
                }"
            >
                <p class="text-xs rotate-12">Hover or click!</p>
                <Icon name="at-icons:arrow-turn-down-left" size="18" />
            </motion.div>
        </div>
        <motion.div
            :initial="{ opacity: 0, y: -20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            class="text-sm sm:text-base text-base-content/80 max-w-2xl"
        >
            And I have worked with a variety of other tools and technologies:
        </motion.div>
        <motion.div
            :initial="{ opacity: 0, height: 0, y: -10 }"
            :animate="{ opacity: 1, height: 'auto', y: 0, transition: { duration: 0.35, ease: 'easeOut' } }"
            :exit="{ opacity: 0, height: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } }"
            class="w-full max-w-4xl mt-10 overflow-hidden text-left"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div
                    v-for="cat in categories"
                    :key="cat.name"
                    class="p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                    <div>
                        <h4 class="text-base font-bold text-base-content mb-3 flex items-center gap-2">
                            <span class="text-primary font-mono">•</span>
                            <span>{{ cat.name }}</span>
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tool in cat.tools"
                                :key="tool.name"
                                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-base-200 border border-base-300/80 text-xs text-base-content/90 font-mono hover:border-primary/50 transition-colors"
                            >
                                <Icon :name="getToolIcon(tool)" size="16" />
                                <span>{{ tool.name }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
</template>
