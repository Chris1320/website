<script setup lang="ts">
const carouselImageIndex = ref(0);
const props = defineProps<{
    images: { description: string; url: string }[];
}>();

function prevImage() {
    carouselImageIndex.value = (carouselImageIndex.value + (props.images.length - 1)) % props.images.length;
}

function nextImage() {
    carouselImageIndex.value = (carouselImageIndex.value + 1) % props.images.length;
}
</script>

<template>
    <div v-if="images.length > 0" class="carousel w-full overflow-hidden">
        <div
            v-for="(image, index) in props.images"
            v-show="carouselImageIndex === index"
            :id="`slide${index + 1}`"
            :key="index"
            class="carousel-item relative w-full"
        >
            <img :src="image.url" class="w-full" :alt="image.description" />
            <!-- FIXME: Buttons readjust when images are longer than usual. -->
            <div
                v-show="images.length > 1"
                class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
                <button class="btn btn-circle" @click="prevImage()">
                    <Icon name="mdi:chevron-left" size="24" />
                </button>
                <button class="btn btn-circle" @click="nextImage()">
                    <Icon name="mdi:chevron-right" size="24" />
                </button>
            </div>
        </div>
    </div>
    <div v-else class="grid place-content-center h-80">
        <div class="flex flex-col items-center">
            <Icon name="mdi:image-off" size="48" class="text-gray-400 mb-4" />
            <p class="text-gray-500">No image provided</p>
        </div>
    </div>
</template>
