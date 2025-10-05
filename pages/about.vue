<template>
    <div class="container mx-auto p-4 min-h-screen">
        <h1 class="text-3xl font-bold mb-4">About Me</h1>
        <AboutWhoAmI />
        <!-- CV -->
        <!-- TODO: properly link to CV file -->
        <div class="pt-8">
            <h2 class="text-2xl font-semibold mb-2">Curriculum Vitae</h2>
            <p class="mb-4 text-xl">
                You can view or download my CV
                <NuxtLink href="/my/cv" class="link-hover">here</NuxtLink>.
            </p>
        </div>
        <!-- Toolkit -->
        <div class="pt-8">
            <h2 class="text-2xl font-semibold mb-2">Toolkit</h2>
            <ToolkitArsenal />
        </div>
    </div>
</template>
