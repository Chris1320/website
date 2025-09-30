<script setup lang="ts">
import { motion } from "motion-v";
import type { Project } from "~/utils/models/project";

const props = defineProps<{
    project: Project;
}>();

const animationInitial = { opacity: 0, x: -25 };
const animationWhileInView = { opacity: 1, x: 0, transition: { duration: 0.5 } };
const animationMockupInitial = { opacity: 0, x: 25 };
const animationMockupWhileInView = { opacity: 1, x: 0, transition: { duration: 0.5 } };

function isValidDate(dateString: string | undefined): boolean {
    if (!dateString) return false;
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}
</script>

<template>
    <!-- For desktop -->
    <div class="flex flex-col md:flex-row gap-8 pt-10">
        <div class="hidden md:block flex-1">
            <motion.h2 :initial="animationInitial" :while-in-view="animationWhileInView" class="text-2xl font-bold">
                {{ props.project.name }}
            </motion.h2>
            <div class="flex items-center justify-between">
                <!-- TODO: do not show range if start and end are within the same month -->
                <motion.p
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="text-sm text-gray-500 mb-2"
                >
                    {{
                        isValidDate(props.project.dateStart)
                            ? formatDate(props.project.dateStart)
                            : props.project.dateStart
                    }}
                    -
                    {{
                        isValidDate(props.project.dateEnd) && props.project.dateEnd
                            ? formatDate(props.project.dateEnd)
                            : props.project.dateEnd || "Present"
                    }}
                </motion.p>
                <motion.div
                    v-if="props.project.status === 'stable'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-success"
                >
                    Stable
                </motion.div>
                <motion.div
                    v-else-if="props.project.status === 'wip'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-warning"
                >
                    In Progress
                </motion.div>
                <motion.div
                    v-else-if="props.project.status === 'archived'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-info"
                >
                    Archived
                </motion.div>
                <motion.div
                    v-else
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-neutral"
                >
                    Unknown
                </motion.div>
            </div>
            <motion.p :initial="animationInitial" :while-in-view="animationWhileInView" class="py-6">
                {{ props.project.description }}
            </motion.p>
            <div class="mt-4 flex flex-col md:flex-row justify-between">
                <div>
                    <motion.p
                        v-if="props.project.links?.length === 0"
                        :initial="animationInitial"
                        :while-in-view="animationWhileInView"
                        class="text-xs text-gray-500 mb-2"
                    >
                        No Links Available
                    </motion.p>
                    <NuxtLink
                        v-for="link in props.project.links"
                        :key="link.name"
                        :to="link.url"
                        class="hover:underline mr-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            :initial="animationInitial"
                            :while-in-view="animationWhileInView"
                            class="btn btn-sm btn-outline btn-accent mr-2 mb-2"
                        >
                            {{ link.name }}
                        </motion.button>
                    </NuxtLink>
                </div>
                <div>
                    <motion.p
                        v-if="props.project.technologies?.length === 0"
                        :initial="animationInitial"
                        :while-in-view="animationWhileInView"
                        class="text-xs text-gray-500 mb-2"
                    >
                        No Technologies Listed
                    </motion.p>
                    <motion.span
                        v-for="tech in props.project.technologies"
                        :key="tech.name"
                        :initial="animationInitial"
                        :while-in-view="animationWhileInView"
                        class="inline-flex items-center mr-2"
                    >
                        <div class="tooltip" :data-tip="tech.name">
                            <Icon :name="tech.icon" class="w-4 h-4 mr-1" />
                        </div>
                    </motion.span>
                </div>
            </div>
        </div>
        <motion.div
            :initial="animationMockupInitial"
            :while-in-view="animationMockupWhileInView"
            class="hidden md:block flex-1"
        >
            <!-- TODO: This could be better. -->
            <ProjectsMockupDesktop v-if="props.project.mockups.type == 'desktop'" :data="props.project.mockups.data" />
            <ProjectsMockupBrowser
                v-else-if="props.project.mockups.type == 'web' && 'url' in props.project.mockups.data"
                :data="props.project.mockups.data"
            />
            <ProjectsMockupMobile
                v-else-if="props.project.mockups.type == 'mobile'"
                :data="props.project.mockups.data"
            />
        </motion.div>
    </div>
    <!-- For mobile -->
    <div class="md:hidden">
        <motion.div :initial="animationMockupInitial" :while-in-view="animationMockupWhileInView" class="flex-1">
            <!-- TODO: This could be better. -->
            <ProjectsMockupDesktop v-if="props.project.mockups.type == 'desktop'" :data="props.project.mockups.data" />
            <ProjectsMockupBrowser
                v-else-if="props.project.mockups.type == 'web' && 'url' in props.project.mockups.data"
                :data="props.project.mockups.data"
            />
            <ProjectsMockupMobile
                v-else-if="props.project.mockups.type == 'mobile'"
                :data="props.project.mockups.data"
            />
        </motion.div>
        <div class="flex-1">
            <motion.h2 :initial="animationInitial" :while-in-view="animationWhileInView" class="text-2xl font-bold">
                {{ props.project.name }}
            </motion.h2>
            <div class="flex items-center justify-between">
                <!-- TODO: do not show range if start and end are within the same month -->
                <motion.p
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="text-sm text-gray-500 mb-2"
                >
                    {{
                        isValidDate(props.project.dateStart)
                            ? formatDate(props.project.dateStart)
                            : props.project.dateStart
                    }}
                    -
                    {{
                        isValidDate(props.project.dateEnd) && props.project.dateEnd
                            ? formatDate(props.project.dateEnd)
                            : props.project.dateEnd || "Present"
                    }}
                </motion.p>
                <motion.div
                    v-if="props.project.status === 'stable'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-success"
                >
                    Stable
                </motion.div>
                <motion.div
                    v-else-if="props.project.status === 'wip'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-warning"
                >
                    In Progress
                </motion.div>
                <motion.div
                    v-else-if="props.project.status === 'archived'"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-info"
                >
                    Archived
                </motion.div>
                <motion.div
                    v-else
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="badge badge-soft badge-neutral"
                >
                    Unknown
                </motion.div>
            </div>
            <div>
                <motion.p
                    v-if="props.project.technologies?.length === 0"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="text-xs text-gray-500 mb-2"
                >
                    No Technologies Listed
                </motion.p>
                <motion.span
                    v-for="tech in props.project.technologies"
                    :key="tech.name"
                    :initial="animationInitial"
                    :while-in-view="animationWhileInView"
                    class="inline-flex items-center mr-2"
                >
                    <div class="tooltip" :data-tip="tech.name">
                        <Icon :name="tech.icon" class="w-4 h-4 mr-1" />
                    </div>
                </motion.span>
            </div>

            <motion.p :initial="animationInitial" :while-in-view="animationWhileInView" class="py-6">
                {{ props.project.description }}
            </motion.p>
            <div class="mt-4 flex flex-col md:flex-row justify-between">
                <div>
                    <motion.p
                        v-if="props.project.links?.length === 0"
                        :initial="animationInitial"
                        :while-in-view="animationWhileInView"
                        class="text-xs text-gray-500 mb-2"
                    >
                        No Links Available
                    </motion.p>
                    <NuxtLink
                        v-for="link in props.project.links"
                        :key="link.name"
                        :to="link.url"
                        class="hover:underline mr-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            :initial="animationInitial"
                            :while-in-view="animationWhileInView"
                            class="btn btn-sm btn-outline btn-accent mr-2 mb-2"
                        >
                            {{ link.name }}
                        </motion.button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
