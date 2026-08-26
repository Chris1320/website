<script setup lang="ts">
import type { Project } from "~/utils/models/project";

import { motion } from "motion-v";

import rawProjects from "~/public/data/projects.json";

const allProjects = rawProjects as Project[];
const visibleProjects = computed(() => allProjects.filter((p) => p.visible));

function formatDate(dateStr: string) {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateRange(from: string, to?: string | null) {
    return `${formatDate(from)} - ${to ? formatDate(to) : "Present"}`;
}
</script>

<template>
    <section id="projects" class="w-full max-w-5xl mx-auto px-6 py-24 font-mono">
        <div class="text-center mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-base-content mb-3">
                My <span class="text-primary">Projects</span>
            </h2>
            <p class="text-xs sm:text-sm text-base-content/70 max-w-lg mx-auto">
                Here are some of the software systems I've built.
            </p>
        </div>
        <div class="space-y-20 sm:space-y-28">
            <motion.article
                v-for="(project, index) in visibleProjects"
                :key="project.id"
                :initial="{ opacity: 0, y: 30 }"
                :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }"
                :viewport="{ once: true, margin: '-50px' }"
                class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
                <div class="flex-1 space-y-4 w-full">
                    <NuxtLink
                        :to="`/project/${project.id}`"
                        class="group inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        <h3
                            class="text-xl sm:text-2xl font-bold text-base-content group-hover:text-primary transition-colors"
                        >
                            {{ project.name }}
                        </h3>
                        <Icon
                            name="material-symbols:arrow-outward-rounded"
                            size="18"
                            class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary"
                        />
                    </NuxtLink>
                    <div class="flex items-center justify-between gap-3 flex-wrap">
                        <div class="text-xs text-base-content/60 font-mono">
                            {{ formatDateRange(project.dateStart, project.dateEnd) }}
                        </div>
                        <span
                            v-if="project.status === 'stable'"
                            class="badge badge-sm badge-success badge-soft font-mono"
                        >
                            Stable
                        </span>
                        <span
                            v-else-if="project.status === 'wip'"
                            class="badge badge-sm badge-warning badge-soft font-mono"
                        >
                            In Progress
                        </span>
                        <span
                            v-else-if="project.status === 'archived'"
                            class="badge badge-sm badge-info badge-soft font-mono"
                        >
                            Archived
                        </span>
                    </div>
                    <p class="text-xs sm:text-sm text-base-content/80 leading-relaxed text-justify py-2">
                        {{ project.shortDescription }}
                    </p>
                    <div class="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <NuxtLink
                                v-for="link in project.links"
                                :key="link.name"
                                :to="link.url"
                                class="hover:underline mr-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button class="btn btn-sm btn-outline btn-accent mr-2 mb-2">
                                    {{ link.name }}
                                </button>
                            </NuxtLink>
                        </div>
                        <div>
                            <span
                                v-for="tech in project.technologies"
                                :key="tech.name"
                                class="inline-flex items-center mr-2 mb-2"
                            >
                                <div class="tooltip" :data-tip="tech.name">
                                    <motion.div :while-hover="{ scale: 1.5 }">
                                        <Icon :name="tech.icon" class="w-5 h-5 mr-1" />
                                    </motion.div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 w-full max-w-lg lg:max-w-none">
                    <ProjectsMockupDesktop
                        v-if="project.mockups && project.mockups.type === 'desktop'"
                        :data="project.mockups.data"
                    />
                    <ProjectsMockupBrowser
                        v-else-if="project.mockups && project.mockups.type === 'web' && 'url' in project.mockups.data"
                        :data="project.mockups.data"
                    />
                    <ProjectsMockupMobile
                        v-else-if="project.mockups && project.mockups.type === 'mobile'"
                        :data="project.mockups.data"
                    />
                    <div v-else class="p-8 text-center text-xs text-base-content/50">No preview available</div>
                </div>
            </motion.article>
        </div>
    </section>
</template>
