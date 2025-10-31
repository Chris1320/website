<script setup lang="ts">
import type { Project } from "~/utils/models/project";

defineProps<{
    projects?: Project[];
}>();
</script>

<template>
    <div class="grid grid-cols-5">
        <div v-for="project in projects" :key="project.id">
            <div v-if="project.visible">
                <div v-if="project.mockups.data.images.length > 0">
                    <ProjectsMockupContent :images="project.mockups.data.images" />
                </div>
            </div>
        </div>
    </div>
</template>
