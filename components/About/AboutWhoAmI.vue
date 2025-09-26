<script lang="ts" setup>
const yearStarted = new Date(2015, 0, 1);
const currentTime = new Date();

const yearsOfExperience = currentTime.getFullYear() - yearStarted.getFullYear();
</script>

<template>
    <div class="pt-8">
        <h2 class="text-2xl font-semibold mb-2">Who am I?</h2>
        <p class="mb-4 text-xl">
            Hi! I am Christopher Andrei Tayao, a student from
            <NuxtLink href="https://baliuagu.edu.ph/" target="_blank">Baliuag University</NuxtLink> studying
            <strong>BS Computer Science</strong>. I am aiming to be a full-stack software developer. I like doing random
            things that are related to computers and technology.
        </p>
        <p class="mb-4 text-xl">
            I started programming <b>{{ yearsOfExperience }} years ago</b>.
        </p>
    </div>
</template>
