<script setup lang="ts">
import type { Project } from "~/utils/models/project";
import rawProjects from "~/public/data/projects.json";

const projects = rawProjects as Project[];
</script>

<template>
    <div class="container min-h-screen mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Projects</h1>
        <div v-for="project in projects" :key="project.id">
            <ProjectsProjectQuickGlance v-if="project.visible" :project="project" />
        </div>
    </div>
</template>
