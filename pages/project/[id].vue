<script setup lang="ts">
import type { Project } from "~/utils/models/project";

const route = useRoute();

const { data: projects, pending, error } = await useFetch<Project[]>("/data/projects.json", { server: false });
console.log(`There are ${projects.value?.length || 0} projects.`);

const projectId = route.params.id as string;
</script>

<template>
    <div class="container mx-auto p-4 min-h-screen">
        <div v-if="pending" class="mb-6 flex flex-row justify-center items-center">
            <span class="loading loading-circle loading-md" />
            <p class="pl-5 text-md">Loading projects...</p>
        </div>
        <div v-else-if="error">
            <AppError title="An error occured loading projects" :error="error.message" />
        </div>
        <!-- NOTE: Hidden projects will still be visible when manually navigating to their project page. -->
        <div v-else>
            <div v-for="project in projects" v-show="project.id.toString() === projectId" :key="project.id">
                <ProjectsProjectDetailedView :project="project" />
            </div>
        </div>
    </div>
</template>
