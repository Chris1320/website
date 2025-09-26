<script setup lang="ts">
import CurriculumVitae from "~/components/My/CurriculumVitae.vue";

const route = useRoute();
const showImage = ref(route.query.image ? route.query.image === "true" : false);
const showFooter = ref(route.query.footer ? route.query.footer === "true" : false);
const fancyMode = ref(route.query.fancy ? route.query.fancy === "true" : true);

definePageMeta({
    layout: "resume",
});

useHead({
    title: "CV - Christopher Andrei Tayao",
    meta: [
        { name: "description", content: "Christopher Andrei Tayao's Curriculum Vitae" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>

<template>
    <div>
        <CurriculumVitae :show-image="showImage" :fancy-mode="fancyMode" />
        <div class="h-32" />
        <AppFooter v-show="showFooter" />
    </div>
</template>
