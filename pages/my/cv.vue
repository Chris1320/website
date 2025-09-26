<script setup lang="ts">
import CurriculumVitae from "~/components/My/CurriculumVitae.vue";

const route = useRoute();
const showImage = ref(route.query.image ? route.query.image === "true" : false);
const showFooter = ref(route.query.footer ? route.query.footer === "true" : false);
const fancyMode = ref(route.query.fancy ? route.query.fancy === "true" : true);
// For PDF Export
const isExporting = ref(false);
const exportTitle = ref("Christopher Andrei Tayao - CV");

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

async function exportPdf() {
    isExporting.value = true;
    window.print();
    // TODO: Implement PDF export functionality
    isExporting.value = false;
    return;
}
</script>

<template>
    <div>
        <CurriculumVitae :show-image="showImage" :fancy-mode="fancyMode" />
        <div class="fab">
            <button class="btn btn-lg btn-circle btn-accent" @click="exportPdf">
                <span v-if="isExporting" class="loading loading-spinner loading-lg" />
                <span v-else><Icon name="mdi:printer" /></span>
            </button>
        </div>
        <div class="h-32" />
        <AppFooter v-show="showFooter" />
    </div>
</template>
