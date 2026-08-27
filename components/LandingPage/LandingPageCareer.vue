<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";

import rawData from "~/public/data/experience-and-education.json";

type TabType = "experience" | "education";

interface ExperienceItem {
    company: string;
    location?: string;
    position: string;
    from: string;
    to: string;
    highlights: string[];
    url: string;
    logo?: string;
}

interface EducationItem {
    school: string;
    location?: string;
    degree: string;
    major?: string;
    from: string;
    to: string;
    highlights: string[];
    url: string;
    logo?: string;
}

const activeTab = ref<TabType>("experience");
const imageErrors = ref<Record<string, boolean>>({});

function handleImageError(id: string) {
    imageErrors.value[id] = true;
}

function formatDate(dateStr: string) {
    if (!dateStr || dateStr.toLowerCase() === "present") return "Present";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateRange(from: string, to: string) {
    return `${formatDate(from)} - ${formatDate(to)}`;
}

function parseSortDate(dateStr: string): number {
    if (!dateStr || dateStr.toLowerCase() === "present") return Infinity;
    const time = new Date(dateStr).getTime();
    return isNaN(time) ? 0 : time;
}

const experienceList = computed(() => {
    const raw = rawData.experience;
    const items: ExperienceItem[] = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return [...items].sort((a, b) => {
        const dateB = parseSortDate(b.to || b.from);
        const dateA = parseSortDate(a.to || a.from);
        return dateB - dateA;
    });
});

const educationList = computed(() => {
    const raw = rawData.education;
    const items: EducationItem[] = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return [...items].sort((a, b) => {
        const dateB = parseSortDate(b.to || b.from);
        const dateA = parseSortDate(a.to || a.from);
        return dateB - dateA;
    });
});
</script>

<template>
    <motion.section
        id="career"
        class="w-full max-w-4xl mx-auto px-6 py-20 font-mono"
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }"
        :viewport="{ once: true, margin: '-60px' }"
    >
        <div class="text-center mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-base-content mb-3">
                My <span class="text-primary">Career</span>
            </h2>
            <p class="text-xs sm:text-sm text-base-content/70 max-w-lg mx-auto">
                My professional experience and educational background.
            </p>
        </div>
        <div
            class="grid grid-cols-2 p-1.5 rounded-xl bg-base-200/80 border border-base-300/60 mb-6 text-sm font-semibold"
        >
            <button
                class="py-2.5 px-4 rounded-lg transition-all text-center flex items-center justify-center gap-2"
                :class="
                    activeTab === 'experience'
                        ? 'bg-base-100 text-base-content shadow-sm border border-base-300/50 font-bold'
                        : 'text-base-content/60 hover:text-base-content'
                "
                @click="activeTab = 'experience'"
            >
                <span>Work</span>
            </button>
            <button
                class="py-2.5 px-4 rounded-lg transition-all text-center flex items-center justify-center gap-2"
                :class="
                    activeTab === 'education'
                        ? 'bg-base-100 text-base-content shadow-sm border border-base-300/50 font-bold'
                        : 'text-base-content/60 hover:text-base-content'
                "
                @click="activeTab = 'education'"
            >
                <span>Education</span>
            </button>
        </div>
        <div class="rounded-2xl border border-base-300/50 bg-base-200/20 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            <AnimatePresence mode="wait">
                <motion.div
                    v-if="activeTab === 'experience'"
                    key="experience-timeline"
                    :initial="{ opacity: 0, y: 10 }"
                    :animate="{ opacity: 1, y: 0, transition: { duration: 0.25 } }"
                    :exit="{ opacity: 0, y: -10, transition: { duration: 0.15 } }"
                    class="space-y-10"
                >
                    <div v-for="(item, index) in experienceList" :key="index" class="relative flex gap-4 sm:gap-6">
                        <div
                            v-if="index < experienceList.length - 1"
                            class="absolute left-6 top-12 bottom-0 w-0.5 bg-base-300/60 -translate-x-1/2"
                        />
                        <div class="relative z-10 w-12 h-12 flex items-center justify-center shrink-0 overflow-hidden">
                            <img
                                v-if="item.logo && !imageErrors[`exp-${index}`]"
                                :src="item.logo"
                                :alt="item.company"
                                class="w-full h-full object-contain p-1"
                                @error="handleImageError(`exp-${index}`)"
                            />
                            <Icon v-else name="material-symbols:work-outline" class="text-primary text-xl" />
                        </div>
                        <div class="flex-1 min-w-0 pt-0.5">
                            <NuxtLink :to="item.url" target="_blank" class="hover:underline">
                                <h3 class="text-base sm:text-lg font-bold text-base-content tracking-tight">
                                    {{ item.company }}
                                </h3>
                            </NuxtLink>
                            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mt-0.5">
                                <span class="text-sm text-base-content/90 font-medium">
                                    {{ item.position }}
                                </span>
                                <span class="text-xs sm:text-sm text-base-content/60 shrink-0 font-mono">
                                    {{ formatDateRange(item.from, item.to) }}
                                </span>
                            </div>
                            <ul
                                class="list-disc pl-5 space-y-2 mt-3 text-xs sm:text-sm text-base-content/80 leading-relaxed"
                            >
                                <li v-for="(highlight, hIdx) in item.highlights" :key="hIdx">
                                    {{ highlight }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    v-else
                    key="education-timeline"
                    :initial="{ opacity: 0, y: 10 }"
                    :animate="{ opacity: 1, y: 0, transition: { duration: 0.25 } }"
                    :exit="{ opacity: 0, y: -10, transition: { duration: 0.15 } }"
                    class="space-y-10"
                >
                    <div v-for="(item, index) in educationList" :key="index" class="relative flex gap-4 sm:gap-6">
                        <div
                            v-if="index < educationList.length - 1"
                            class="absolute left-6 top-12 bottom-0 w-0.5 bg-base-300/60 -translate-x-1/2"
                        />
                        <div class="relative z-10 w-12 h-12 flex items-center justify-center shrink-0 overflow-hidden">
                            <img
                                v-if="item.logo && !imageErrors[`edu-${index}`]"
                                :src="item.logo"
                                :alt="item.school"
                                class="w-full h-full object-contain p-1 rounded-full"
                                @error="handleImageError(`edu-${index}`)"
                            />
                            <Icon v-else name="material-symbols:school-outline" class="text-primary text-xl" />
                        </div>
                        <div class="flex-1 min-w-0 pt-0.5">
                            <NuxtLink :to="item.url" target="_blank" class="hover:underline">
                                <h3 class="text-base sm:text-lg font-bold text-base-content tracking-tight">
                                    {{ item.school }}
                                </h3>
                            </NuxtLink>
                            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mt-0.5">
                                <span class="text-sm text-base-content/90 font-medium">
                                    {{ item.degree
                                    }}<span v-if="item.major" class="text-base-content/70">, {{ item.major }}</span>
                                </span>
                                <span class="text-xs sm:text-sm text-base-content/60 shrink-0 font-mono">
                                    {{ formatDateRange(item.from, item.to) }}
                                </span>
                            </div>
                            <ul
                                class="list-disc pl-5 space-y-2 mt-3 text-xs sm:text-sm text-base-content/80 leading-relaxed"
                            >
                                <li v-for="(highlight, hIdx) in item.highlights" :key="hIdx">
                                    {{ highlight }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </motion.section>
</template>
