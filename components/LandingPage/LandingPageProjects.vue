<script setup lang="ts">
import type { Project } from "~/utils/models/project";

const { data: projects, pending, error } = await useFetch<Project[]>("/data/projects.json", { server: false });
console.log(`There are ${projects.value?.length} projects.`);
</script>

<template>
    <div class="container min-h-screen mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Projects</h1>
        <div v-if="pending" class="mb-6 flex flex-row justify-center items-center">
            <span class="loading loading-circle loading-md" />
            <p class="pl-5 text-md">Loading projects...</p>
        </div>
        <div v-else-if="error"><AppError title="An error occured loading projects" :error="error.message" /></div>
        <div v-for="project in projects" v-else :key="project.id">
            <ProjectsProjectQuickGlance :project="project" />
        </div>
    </div>
</template>
