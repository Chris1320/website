<script setup lang="ts">
import type { Project } from "~/utils/models/project";

const tableViewMode = ref(false);
const { data: projects, pending, error } = await useFetch<Project[]>("/data/projects.json", { server: false });
console.log(`There are ${projects.value?.length || 0} projects.`);
</script>

<template>
    <div class="container mx-auto p-4 min-h-screen">
        <div class="flex flex-row justify-between items-center mb-6">
            <h1 class="text-3xl font-bold mb-4">Projects</h1>
            <div class="flex cursor-pointer gap-2 items-center">
                <Icon name="mdi:view-list" />
                <input v-model="tableViewMode" type="checkbox" class="toggle theme-controller" />
                <Icon name="mdi:table" />
            </div>
        </div>
        <div v-if="pending" class="mb-6 flex flex-row justify-center items-center">
            <span class="loading loading-circle loading-md" />
            <p class="pl-5 text-md">Loading projects...</p>
        </div>
        <div v-else-if="error">
            <AppError title="An error occured loading projects" :error="error.message" />
        </div>
        <div v-else>
            <!-- Table View -->
            <ProjectsProjectTableView v-if="tableViewMode" :projects="projects" :table-view-mode="tableViewMode" />
            <!-- List View -->
            <div v-for="project in projects" v-show="!tableViewMode" :key="project.id">
                <ProjectsProjectQuickGlance v-if="project.visible" :project="project" />
            </div>
        </div>
    </div>
</template>
