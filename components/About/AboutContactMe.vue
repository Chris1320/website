<script lang="ts" setup>
import { ref } from "vue";
import ky from "ky";

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function handleSubmit() {
    isSubmitting.value = true;
    successMessage.value = "";
    errorMessage.value = "";

    const endpoint = "https://automation.chrisfromnowhere.me/webhook/25ae89f6-369a-4b6e-9adf-17a065bc7bd3";
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) {
        errorMessage.value = "Form element not found.";
        isSubmitting.value = false;
        return;
    }

    const formData = new FormData(form);
    const payload: Record<string, any> = {};
    formData.forEach((value, key) => {
        payload[key] = value;
    });

    try {
        const res = await ky.post(endpoint, { json: payload });

        if (res && res.status === 200) {
            successMessage.value = "Message sent. Thank you!";

            setTimeout(() => {
                form.reset();
                const dialog = form.closest("dialog") as HTMLDialogElement | null;
                if (dialog) dialog.close();
                successMessage.value = "";
            }, 5000);
        } else {
            errorMessage.value = res.statusText;
        }
    } catch (err: any) {
        errorMessage.value = err?.message || "Request failed.";
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="card bg-base-100 max-w-lg mx-auto">
        <div class="card-body gap-4">
            <h2 class="card-title text-3xl font-bold">Contact Me</h2>
            <div class="space-y-3">
                <div v-if="successMessage" class="alert alert-success shadow-lg">
                    <div>
                        <span>{{ successMessage }}</span>
                    </div>
                </div>
                <div v-if="errorMessage" class="alert alert-error shadow-lg">
                    <div>
                        <span>{{ errorMessage }}</span>
                    </div>
                </div>
            </div>

            <form id="contact-form" class="space-y-4" @submit.prevent="handleSubmit">
                <div class="form-control">
                    <label for="name" class="label w-full"><span class="label-text text-left">Full Name*</span></label>
                    <input id="name" name="name" type="text" required class="input input-bordered w-full" />
                </div>

                <div class="form-control">
                    <label for="email" class="label w-full"
                        ><span class="label-text text-left">Email Address*</span></label
                    >
                    <input id="email" name="email" type="email" required class="input input-bordered w-full" />
                </div>

                <div class="form-control">
                    <label for="reason" class="label w-full"
                        ><span class="label-text text-left">Reason for Reaching Out</span></label
                    >
                    <select id="reason" name="reason" class="select select-bordered w-full">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Job Opportunity">Job Opportunity / Freelance</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div class="form-control">
                    <label for="message" class="label w-full"><span class="label-text text-left">Message*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        class="textarea textarea-bordered w-full h-32"
                    ></textarea>
                </div>

                <div class="form-control mt-2">
                    <button
                        type="submit"
                        :class="['btn btn-primary', { loading: isSubmitting }]"
                        :disabled="isSubmitting || !!successMessage"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
