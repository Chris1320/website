<script lang="ts" setup>
defineProps<{
    hoveredTool: Tool | null;
    hoveredToolCategory: string | null;
    defaultIcon?: string;
    clearHoveredTool: () => void;
}>();
</script>

<template>
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
</template>

<style></style>
