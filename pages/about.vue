<script setup lang="ts">
import { motion } from "motion-v";

const isMounted = ref(false);
const defaultIcon = "mdi:toolbox";
const hoveredTool = ref<Tool | null>(null);
const hoveredToolCategory = ref<string | null>(null);
const { data: toolkit, pending, error } = await useFetch<ToolkitCategory[]>("/data/toolkit.json", { server: false });
console.log(`There are ${toolkit.value?.length || 0} toolkit categories loaded.`);

function setHoveredTool(tool: Tool, category: string) {
    console.log(`Hovering over tool: ${tool.name} in category: ${category}`);
    hoveredTool.value = tool;
    hoveredToolCategory.value = category;
}

function showHoveredToolInfo() {
    console.log("Showing info for hovered tool.");
    const dialog = document.getElementById("view_toolkit_info_modal") as HTMLDialogElement;
    if (dialog && hoveredTool && hoveredToolCategory) {
        console.log(`Showing info for tool: ${hoveredTool.value?.name} in category: ${hoveredToolCategory.value}`);
        dialog.showModal();
    } else {
        console.log("No tool is currently selected to show info for.");
    }
}

function clearHoveredTool() {
    console.log("No longer hovering over any tool.");
    hoveredTool.value = null;
    hoveredToolCategory.value = null;
}

onMounted(() => {
    isMounted.value = true;
});
</script>

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
            <div v-if="pending" class="mb-6 flex flex-row justify-center items-center">
                <span class="loading loading-circle loading-md" />
                <p class="pl-5 text-md">Loading toolkit...</p>
            </div>
            <div v-else-if="error">
                <AppError title="An error occured loading the toolkit" :error="error.message" />
            </div>
            <div v-else>
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
                                                showHoveredToolInfo()
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
        </div>
        <dialog id="view_toolkit_info_modal" class="modal" @close="clearHoveredTool()">
            <div class="modal-box modal-color-override">
                <div class="flex flex-col items-center pb-5">
                    <Icon :name="hoveredTool?.icon || defaultIcon" size="128" class="my-4 text-center" />
                    <div class="badge badge-soft badge-accent text-center">
                        {{ hoveredToolCategory || "No category" }}
                    </div>
                    <h3 class="text-xl font-bold text-center">{{ hoveredTool?.name || "No tool selected" }}</h3>
                </div>
                <p>{{ hoveredTool?.description || "Please select a tool first" }}</p>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
</template>
