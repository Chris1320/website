<script setup lang="ts">
import type { Project } from "~/models/project";

const props = defineProps<{
    project: Project;
}>();

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
    <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
            <h2 class="text-2xl font-bold">{{ props.project.name }}</h2>
            <div class="flex items-center justify-between">
                <!-- TODO: do not show range if start and end are within the same month -->
                <p class="text-sm text-gray-500 mb-2">
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
                </p>
                <div v-show="props.project.status === 'stable'" class="badge badge-soft badge-success">Stable</div>
                <div v-show="props.project.status === 'wip'" class="badge badge-soft badge-warning">In Progress</div>
                <div v-show="props.project.status === 'abandoned'" class="badge badge-soft badge-error">Abandoned</div>
            </div>
            <p class="py-6">
                {{ props.project.description }}
            </p>
            <div class="mt-4 flex flex-col md:flex-row justify-between">
                <div>
                    <p v-if="props.project.links?.length === 0" class="text-xs text-gray-500 mb-2">
                        No Links Available
                    </p>
                    <NuxtLink
                        v-for="link in props.project.links"
                        :key="link.name"
                        :to="link.url"
                        class="hover:underline mr-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </div>
                <div>
                    <p v-if="props.project.technologies?.length === 0" class="text-xs text-gray-500 mb-2">
                        No Technologies Listed
                    </p>
                    <span
                        v-for="tech in props.project.technologies"
                        :key="tech.name"
                        class="inline-flex items-center mr-2"
                    >
                        <div class="tooltip" :data-tip="tech.name">
                            <Icon :name="tech.icon" class="w-4 h-4 mr-1" />
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <div class="flex-1">
            <ProjectsMockupBrowser v-if="props.project.mockups.type == 'web'" :data="props.project.mockups.data" />
        </div>
    </div>
</template>
