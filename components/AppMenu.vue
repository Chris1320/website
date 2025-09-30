<script setup lang="ts">
import { ref } from "vue";

const isMenuCollapsed = ref(true);
const toggleMenu = () => {
    isMenuCollapsed.value = !isMenuCollapsed.value;
};
</script>

<template>
    <ul class="menu bg-base-200 rounded-box fixed top-4 left-4 z-50">
        <li>
            <button @click="toggleMenu()">
                <label class="swap swap-rotate">
                    <input v-model="isMenuCollapsed" type="checkbox" />
                    <!-- onClick events are here as well because they don't work when the user clicks on the icons itself -->
                    <Icon class="swap-on" name="mdi:menu" size="20" @click="toggleMenu()" />
                    <Icon class="swap-off" name="mdi:close" size="20" @click="toggleMenu()" />
                </label>
            </button>
        </li>
        <!-- FIXME: toggle animation does not completely work. -->
        <Motion
            v-if="!isMenuCollapsed"
            :initial="{ opacity: 0, y: -20 }"
            :animate="{ opacity: 1, y: 0, transition: { duration: 0.3 } }"
            :exit="{ opacity: 0, y: -20, transition: { duration: 0.2 } }"
        >
            <li>
                <NuxtLink class="tooltip tooltip-right" data-tip="Home" to="/" @click="toggleMenu()">
                    <Icon name="mdi:home-outline" size="20" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="tooltip tooltip-right" data-tip="Projects" to="/projects" @click="toggleMenu()">
                    <Icon name="mdi:folder-outline" size="20" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="tooltip tooltip-right" data-tip="About Me" to="/about" @click="toggleMenu()">
                    <Icon name="mdi:account-circle-outline" size="20" />
                </NuxtLink>
            </li>
        </Motion>
    </ul>
</template>
