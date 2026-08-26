<script lang="ts" setup>
import type { Tool, ToolkitCategory } from "~/utils/models/toolkit";

import { motion } from "motion-v";
import rawToolkit from "~/public/data/toolkit.json";

const isMounted = ref(false);
const defaultIcon = "mdi:toolbox";
const hoveredTool = ref<Tool | null>(null);
const hoveredToolCategory = ref<string | null>(null);
const toolkit = rawToolkit as ToolkitCategory[];

function setHoveredTool(tool: Tool, category: string) {
    hoveredTool.value = tool;
    hoveredToolCategory.value = category;
}

function showHoveredToolInfo() {
    const dialog = document.getElementById("view-toolkit-info-modal") as HTMLDialogElement;
    if (dialog && hoveredTool && hoveredToolCategory) {
        dialog.showModal();
    }
}

function clearHoveredTool() {
    hoveredTool.value = null;
    hoveredToolCategory.value = null;
}

onMounted(() => {
    isMounted.value = true;
});
</script>

<template>
    <div id="skills">
        <div>
            <p class="mb-4 text-xl">Here are some of the tools and technologies I use:</p>
            <!-- For desktop -->
            <div class="hidden lg:block">
                <div class="flex flex-row gap-4 items-start">
                    <div class="max-w-3/5">
                        <table class="table">
                            <tbody>
                                <tr v-for="toolkitCategory in toolkit" :key="toolkitCategory.name">
                                    <td class="w-1/2">
                                        <div class="text-lg font-semibold text-right">
                                            <p>{{ toolkitCategory.name }}</p>
                                            <p class="text-sm opacity-70">{{ toolkitCategory.description }}</p>
                                        </div>
                                    </td>
                                    <td class="w-1/2">
                                        <div v-if="isMounted" class="grid grid-cols-5 gap-4">
                                            <motion.div
                                                v-for="tool in toolkitCategory.tools"
                                                :key="tool.name"
                                                :initial="{ opacity: 0, y: 20 }"
                                                :animate="{ opacity: 1, y: 0 }"
                                                :while-hover="{ scale: 1.5 }"
                                                @hover-start="setHoveredTool(tool, toolkitCategory.name)"
                                                @hover-end="clearHoveredTool()"
                                            >
                                                <Icon :name="tool.icon" size="48" />
                                            </motion.div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex flex-col items-center max-w-1/4">
                        <Icon :name="hoveredTool ? hoveredTool.icon : defaultIcon" size="256" />
                        <h3 class="text-xl font-semibold mt-4">
                            {{ hoveredTool ? hoveredTool.name : "Select a tool" }}
                        </h3>
                        <div v-if="hoveredToolCategory" class="badge badge-soft badge-accent mt-2">
                            {{ hoveredToolCategory }}
                        </div>
                        <p class="text-center mt-2 text-sm opacity-70">
                            {{
                                hoveredTool
                                    ? hoveredTool.description
                                    : "Hover over a tool to see its name and description."
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- For mobile -->
            <div class="lg:hidden">
                <div v-for="toolkitCategory in toolkit" :key="toolkitCategory.name">
                    <div class="text-lg font-semibold">
                        <p>{{ toolkitCategory.name }}</p>
                        <p class="text-sm opacity-70">{{ toolkitCategory.description }}</p>
                    </div>
                    <table class="table pt-10 max-w-sm">
                        <tbody v-if="isMounted">
                            <tr>
                                <td class="grid grid-cols-5 gap-4">
                                    <motion.div
                                        v-for="tool in toolkitCategory.tools"
                                        :key="tool.name"
                                        :initial="{ opacity: 0, y: 20 }"
                                        :animate="{ opacity: 1, y: 0 }"
                                        :while-hover="{ scale: 1.5 }"
                                        @click="
                                            setHoveredTool(tool, toolkitCategory.name);
                                            showHoveredToolInfo();
                                        "
                                    >
                                        <Icon :name="tool.icon" size="48" />
                                    </motion.div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ToolkitToolInfoModal
            :hovered-tool="hoveredTool"
            :hovered-tool-category="hoveredToolCategory"
            :default-icon="defaultIcon"
            :clear-hovered-tool="clearHoveredTool"
        />
    </div>
</template>

<style></style>
