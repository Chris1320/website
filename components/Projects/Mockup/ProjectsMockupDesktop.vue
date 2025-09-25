<script setup lang="ts">
const props = defineProps<{
    data: {
        images: { description: string; url: string }[];
    };
}>();
</script>

<template>
    <div class="mockup-window bg-base-100 border-base-300 border w-full h-90">
        <ProjectsMockupContent :images="props.data.images" />
    </div>
</template>
