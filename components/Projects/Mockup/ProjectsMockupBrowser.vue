<script setup lang="ts">
import ProjectsMockupContent from "~/components/Projects/Mockup/ProjectsMockupContent.vue";

const props = defineProps<{
    data: {
        url: string;
        images: { description: string; url: string }[];
    };
}>();
</script>

<template>
    <div class="mockup-browser bg-base-100 border-base-300 border w-full h-90">
        <div class="mockup-browser-toolbar">
            <div class="input">{{ props.data.url }}</div>
        </div>
        <ProjectsMockupContent :data="{ images: props.data.images }" />
    </div>
</template>
