<script setup lang="ts">
const props = defineProps<{
    data: {
        images: { description: string; url: string }[];
    };
}>();
</script>

<template>
    <div class="flex justify-center">
        <div class="overflow-hidden h-120">
            <div class="transform scale-50 origin-top m-auto">
                <div class="mockup-phone">
                    <div class="mockup-phone-camera" />
                    <div class="mockup-phone-display">
                        <div class="w-100 h-auto">
                            <ProjectsMockupContent :images="props.data.images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
