<script setup lang="ts">
const carouselImageIndex = ref(0);
const props = defineProps<{
    data: {
        images: { description: string; url: string }[];
    };
}>();

function prevImage() {
    carouselImageIndex.value = (carouselImageIndex.value + (props.data.images.length - 1)) % props.data.images.length;
}

function nextImage() {
    carouselImageIndex.value = (carouselImageIndex.value + 1) % props.data.images.length;
}
</script>

<template>
    <div class="mockup-phone max-w-75 m-0">
        <div class="mockup-phone-camera" />
        <div class="mockup-phone-display">
            <div v-if="data.images.length > 0" class="carousel w-full overflow-hidden">
                <div
                    v-for="(image, index) in props.data.images"
                    v-show="carouselImageIndex === index"
                    :id="`slide${index + 1}`"
                    :key="index"
                    class="carousel-item relative w-full"
                >
                    <img :src="image.url" class="w-full" :alt="image.description" />
                    <!-- FIXME: Buttons readjust when images are longer than usual. -->
                    <div
                        v-show="data.images.length > 1"
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
            <div v-if="data.images.length === 0" class="grid place-content-center text-gray-500 h-80">
                No image provided
            </div>
        </div>
    </div>
</template>
