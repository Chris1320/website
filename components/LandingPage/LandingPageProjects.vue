<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Project } from "~/utils/models/project";

const projects = ref<Project[]>([]);

onMounted(async () => {
    const response = await fetch("/data/projects.json");
    projects.value = await response.json();

    console.log(`There are ${projects.value.length} projects.`);
});
</script>

<template>
    <div class="container min-h-screen mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Projects</h1>
        <div v-for="project in projects" :key="project.id">
            <ProjectsProjectQuickGlance :project="project" />
        </div>
    </div>
</template>
