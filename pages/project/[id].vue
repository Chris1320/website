<script setup lang="ts">
import type { Project } from "~/utils/models/project";
import rawProjects from "~/public/data/projects.json";

const route = useRoute();
const projectId = route.params.id as string;
const projects = rawProjects as Project[];
const currentProject = computed(() => projects.find((p) => p.id.toString() === projectId));
</script>

<template>
    <div class="container mx-auto p-4 min-h-screen">
        <div v-if="currentProject">
            <ProjectsProjectDetailedView :project="currentProject" />
        </div>
        <div v-else class="text-center py-12">
            <AppError title="Project not found" :error="`No project with ID '${projectId}' was found.`" />
        </div>
    </div>
</template>
