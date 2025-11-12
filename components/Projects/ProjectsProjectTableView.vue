<script setup lang="ts">
import type { Project } from "~/utils/models/project";

const MAX_DESC_LEN = 150;
defineProps<{
    tableViewMode: boolean;
    projects?: Project[];
}>();
</script>

<template>
    <div v-show="tableViewMode" class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table class="table">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Status</td>
                    <td>Technologies</td>
                    <td>Date Start</td>
                    <td>Date End</td>
                    <td>Links</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td v-if="project.visible">
                        <NuxtLink :to="`/project/${project.id}`" class="hover:underline">
                            {{ project.name }}
                        </NuxtLink>
                    </td>
                    <td v-if="project.visible">
                        {{
                            project.shortDescription.length > MAX_DESC_LEN
                                ? project.shortDescription.slice(0, MAX_DESC_LEN) + "..."
                                : project.shortDescription
                        }}
                    </td>
                    <td v-if="project.visible" class="align-middle text-center">
                        <span
                            :class="{
                                'badge badge-soft badge-success': project.status === 'stable',
                                'badge badge-soft badge-warning': project.status === 'wip',
                                'badge badge-soft badge-info': project.status === 'archived',
                            }"
                        >
                            {{ project.status }}
                        </span>
                    </td>
                    <td v-if="project.visible">
                        <div class="flex flex-wrap gap-1">
                            <span
                                v-for="tech in project.technologies"
                                :key="tech.name"
                                class="inline-flex items-center mr-2"
                            >
                                <div class="tooltip" :data-tip="tech.name">
                                    <Icon :name="tech.icon" class="inline-block w-4 h-4 mr-1" />
                                </div>
                            </span>
                        </div>
                    </td>
                    <td v-if="project.visible">
                        {{ isValidDate(project.dateStart) ? formatDate(project.dateStart) : project.dateStart }}
                    </td>
                    <td v-if="project.visible">
                        {{
                            isValidDate(project.dateEnd) && project.dateEnd
                                ? formatDate(project.dateEnd)
                                : project.dateEnd || "Present"
                        }}
                    </td>
                    <td v-if="project.visible">
                        <div v-for="link in project.links" :key="link.name" class="flex flex-wrap gap-2">
                            <NuxtLink
                                :to="link.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:underline mr-2"
                            >
                                {{ link.name }}
                            </NuxtLink>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
