<script setup lang="ts">
import type { Project } from "~/utils/models/project";
import rawProjects from "~/public/data/projects.json";

const tableViewMode = ref(false);
const projects = rawProjects as Project[];
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
        <div>
            <!-- Table View -->
            <ProjectsProjectTableView v-if="tableViewMode" :projects="projects" :table-view-mode="tableViewMode" />
            <!-- List View -->
            <div v-for="project in projects" v-show="!tableViewMode" :key="project.id">
                <ProjectsProjectQuickGlance v-if="project.visible" :project="project" />
            </div>
        </div>
    </div>
</template>
