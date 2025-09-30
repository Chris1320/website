<script setup lang="ts">
const props = defineProps<{
    data: {
        url: string;
        images: { description: string; url: string }[];
    };
}>();
</script>

<template>
    <div class="mockup-browser bg-base-100 border-base-300 border w-full h-auto">
        <div class="mockup-browser-toolbar">
            <div class="input">{{ props.data.url }}</div>
        </div>
        <ProjectsMockupContent :images="props.data.images" />
    </div>
</template>
