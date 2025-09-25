<script setup lang="ts"></script>

<template>
    <ul class="menu bg-base-200 rounded-box fixed top-4 left-4 z-50">
        <li>
            <NuxtLink class="tooltip tooltip-right" data-tip="Home" to="/">
                <Icon name="mdi:home-outline" size="20" />
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="tooltip tooltip-right" data-tip="Projects" to="/projects">
                <Icon name="mdi:folder-outline" size="20" />
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="tooltip tooltip-right" data-tip="About Me" to="/about">
                <Icon name="mdi:account-circle-outline" size="20" />
            </NuxtLink>
        </li>
    </ul>
</template>
