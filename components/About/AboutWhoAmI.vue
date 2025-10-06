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
            <NuxtLink href="https://baliuagu.edu.ph/" target="_blank" class="link-hover">Baliuag University</NuxtLink>
            studying <strong>BS Computer Science</strong>. I am aiming to be a full-stack software developer. I like
            doing random things that are related to computers and technology.
        </p>
        <p class="mb-4 text-xl">
            I started programming <b>{{ yearsOfExperience }} years ago</b>.
        </p>
        <p class="mb-4 text-xl">
            Since childhood, I have been fascinated by computers. These machines, capable of converting simple
            instructions into complex operations, have always intrigued me. I first wanted to create a massively
            multiplayer online game (MMO), back when battle royale games weren't popular yet. I didn't even know those
            games existed. But then I realized that creating an MMO was too ambitious for a beginner like me. So, I
            started with simpler projects, and fell into the rabbit hole of cybersecurity.
        </p>
        <p class="mb-4 text-xl">
            I learned a lot of concepts and principles in software development, networking, and computer security. I
            dived a little bit in penetration testing and ethical hacking, trying to "invade" test computers and playing
            <a href="https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)" target="_blank" class="link-hover">
                Capture the Flag
            </a>
            games.
        </p>
        <p class="mb-4 text-xl">
            I believe that
            <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" target="_blank" class="link-hover">
                free and open-source software (FOSS)
            </a>
            is cool and should be given more attention, especially tools that preserve the user's privacy and security.
        </p>
    </div>
</template>
