<script lang="ts" setup>
const props = defineProps<{
    title?: string;
    error: string | null;
}>();
</script>

<template>
    <div class="flex flex-col justify-center items-center min-h-dvh">
        <Icon name="lucide:circle-alert" size="128" class="text-red-200 mb-4" />
        <h1 class="text-4xl font-bold mb-4">{{ props.title || "An unknown error occured" }}</h1>
        <p class="text-lg text-center">{{ props.error }}</p>
    </div>
</template>
