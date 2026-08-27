<script setup lang="ts">
definePageMeta({
    animateNavbar: true,
    keepNavbarVisible: true,
});
</script>

<template>
    <div class="min-h-screen">
        <LandingPageHeroSection />
        <LandingPageAbout />
        <LandingPageExperienceEducation />
        <LandingPageProjects />
    </div>
</template>
