<script setup lang="ts">
import type { CurriculumVitae, Certificate } from "~/utils/models/cv";

const props = defineProps<{
    showImage: boolean;
    fancyMode: boolean;
}>();

const { data: cvData, pending, error } = await useFetch<CurriculumVitae>("/data/cv.json", { server: false });

const selectedCertificate = ref<Certificate | null>(null);

function viewCertificate(cert: Certificate) {
    selectedCertificate.value = cert;
    const modal = document.getElementById("view_certificate_modal") as HTMLDialogElement;
    if (modal) {
        modal.showModal();
    }
}
</script>

<template>
    <!-- Set the max/min width to 1439px to keep the design -->
    <div class="mx-auto max-w-[1439px] min-w-[1439px] min-h-screen bg-[#EDECE6] text-[#1C1D1D]">
        <div v-if="pending" class="text-center p-4">
            <p>Loading CV data...</p>
        </div>
        <div v-else-if="error" class="text-center p-4">
            <AppError title="Error loading CV data" :error="error.message" />
        </div>
        <div v-else-if="cvData">
            <div class="pt-15 pl-15 pr-15">
                <div class="flex flex-row items-center text-center mb-4">
                    <!-- Header Left Side (optional) -->
                    <div v-if="cvData!.imageUrl && props.showImage" class="avatar mr-4">
                        <div class="w-64 rounded-2xl object-cover border-2 border-teal-900">
                            <img :src="cvData!.imageUrl" alt="Image" />
                        </div>
                    </div>
                    <!-- Header Right side -->
                    <div>
                        <!-- Full Name -->
                        <NuxtLink to="/">
                            <h1 class="text-5xl font-bold pb-2">{{ cvData!.name }}</h1>
                        </NuxtLink>
                        <!-- Overview -->
                        <div class="gap-4 pb-5 pl-2">
                            <NuxtLink
                                :to="cvData!.overview.email.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-lg"
                            >
                                <Icon name="mdi:email" class="inline-block w-4 h-4 mr-1 icon-color-override" />
                                <span class="pb-1">{{ cvData!.overview.email.display }}</span>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.phone.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-lg"
                            >
                                <Icon name="mdi:phone" class="inline-block w-4 h-4 mr-1 icon-color-override" />
                                <span class="pb-1">{{ cvData!.overview.phone.display }}</span>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.website.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-lg"
                            >
                                <p>
                                    <Icon name="mdi:web" class="inline-block w-4 h-4 mr-1 icon-color-override" />
                                    <span class="pb-1">{{ cvData!.overview.website.display }}</span>
                                </p>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.location.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center text-lg"
                            >
                                <p>
                                    <Icon name="mdi:map-marker" class="inline-block w-4 h-4 mr-1 icon-color-override" />
                                    <span class="pb-1">{{ cvData!.overview.location.display }}</span>
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <hr />
                <!-- Profile Section -->
                <section class="my-6 px-4">
                    <div class="flex items-center mb-4">
                        <Icon name="mdi:account" class="inline-block w-8 h-8 mr-2 icon-color-override" size="32" />
                        <h2 class="text-3xl font-semibold">Profile</h2>
                    </div>
                    <p class="text-lg italic">{{ cvData!.profile }}</p>
                </section>
                <!-- Education Section -->
                <section class="my-6 px-4">
                    <div class="flex items-center mb-4">
                        <Icon name="mdi:school" class="inline-block w-8 h-8 mr-2 icon-color-override" size="32" />
                        <h2 class="text-3xl font-semibold">Education</h2>
                    </div>
                    <div v-for="(edu, index) in cvData!.education" :key="index" class="mb-4 text-left">
                        <div class="flex justify-between items-top">
                            <div class="mr-4 w-3/4">
                                <!-- Line 1: Institution -->
                                <h3 class="text-xl font-bold">
                                    {{ edu.institution }}
                                    <NuxtLink
                                        v-if="edu.link"
                                        v-show="fancyMode"
                                        :to="edu.link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="mdi:open-in-new" class="ml-1 text-md icon-color-override" />
                                    </NuxtLink>
                                </h3>
                                <!-- Line 2: Degree, Concentration, GWA -->
                                <p class="italic text-lg">
                                    {{ edu.degree }}, {{ edu.concentration }}.
                                    <span v-if="edu.GWA">GWA: {{ edu.GWA }}</span>
                                </p>
                                <!-- List of relevant coursework -->
                                <ul class="list-disc list-inside text-lg">
                                    <li v-if="edu.thesisTitle">Thesis: {{ edu.thesisTitle }}</li>
                                    <li v-if="edu.relevantCoursework.length">
                                        Relevant Coursework: {{ edu.relevantCoursework.join(", ") }}
                                    </li>
                                </ul>
                            </div>
                            <div class="text-right w-1/4">
                                <!-- Line 1: Location -->
                                <p class="text-xl">
                                    {{ edu.location }}
                                </p>
                                <!-- Line 2: Start Date - End Date -->
                                <p class="text-lg">
                                    {{
                                        edu.startDate
                                            ? new Date(edu.startDate).toLocaleDateString("en-US", {
                                                  year: "numeric",
                                                  month: "short",
                                              })
                                            : "N/A"
                                    }}
                                    <span v-if="edu.startDate && edu.endDate">-</span>
                                    {{
                                        edu.endDate
                                            ? edu.endDate === "Present"
                                                ? "Present"
                                                : new Date(edu.endDate).toLocaleDateString("en-US", {
                                                      year: "numeric",
                                                      month: "short",
                                                  })
                                            : "N/A"
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Experience Section -->
                <section class="my-6 px-4">
                    <div class="flex items-center mb-4">
                        <Icon name="mdi:briefcase" class="inline-block w-8 h-8 mr-2 icon-color-override" size="32" />
                        <h2 class="text-3xl font-semibold">Experience</h2>
                    </div>
                    <div v-for="(work, index) in cvData!.experience" :key="index" class="mb-4 text-left">
                        <div class="flex justify-between items-top">
                            <div class="mr-4 w-3/4">
                                <!-- Line 1: Role -->
                                <h3 class="text-xl font-bold">
                                    {{ work.role }}
                                    <NuxtLink
                                        v-if="work.link"
                                        v-show="fancyMode"
                                        :to="work.link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="mdi:open-in-new" class="ml-1 text-md icon-color-override" />
                                    </NuxtLink>
                                </h3>
                                <!-- Line 2: Organization -->
                                <p class="italic text-lg">
                                    {{ work.organization }}
                                </p>
                                <!-- List of responsibilities -->
                                <ul class="list-disc list-inside text-lg">
                                    <li v-for="(resp, rIndex) in work.responsibilities" :key="rIndex">{{ resp }}</li>
                                </ul>
                            </div>
                            <div class="text-right w-1/4">
                                <!-- Line 1: Start Date - End Date -->
                                <p class="text-lg">
                                    {{
                                        work.startDate
                                            ? new Date(work.startDate).toLocaleDateString("en-US", {
                                                  year: "numeric",
                                                  month: "short",
                                              })
                                            : "N/A"
                                    }}
                                    <span v-if="work.startDate && work.endDate">-</span>
                                    {{
                                        work.endDate
                                            ? work.endDate === "Present"
                                                ? "Present"
                                                : new Date(work.endDate).toLocaleDateString("en-US", {
                                                      year: "numeric",
                                                      month: "short",
                                                  })
                                            : "N/A"
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Awards & Certificates Section -->
                <section class="my-6 px-4">
                    <div class="flex items-center mb-4">
                        <Icon name="mdi:certificate" class="inline-block w-8 h-8 mr-2 icon-color-override" size="32" />
                        <h2 class="text-3xl font-semibold">Awards & Certificates</h2>
                    </div>
                    <div v-for="(cert, index) in cvData!.awardsAndCertificates" :key="index" class="mb-4 text-left">
                        <div class="flex justify-between items-top">
                            <div class="mr-4 w-3/4">
                                <!-- Line 1: Title -->
                                <h3 class="text-xl font-bold">
                                    {{ cert.title }}
                                    <button
                                        v-if="cert.image"
                                        v-show="fancyMode"
                                        class="ml-2 cursor-pointer"
                                        @click="viewCertificate(cert)"
                                    >
                                        <Icon name="mdi:open-in-new" class="ml-1 text-md icon-color-override" />
                                    </button>
                                </h3>
                                <p class="italic text-lg">{{ cert.issuer }}</p>
                                <p v-if="cert.description" class="text-md">{{ cert.description }}</p>
                                <p v-if="cert.link" class="text-sm">
                                    <NuxtLink :to="cert.link.url" target="_blank" rel="noopener noreferrer">
                                        <div v-show="fancyMode" class="btn btn-outline badge-sm">
                                            {{ cert.link.title }}
                                        </div>
                                        <a v-show="!fancyMode" class="text-gray-700">
                                            {{ cert.link.url }}
                                        </a>
                                    </NuxtLink>
                                </p>
                            </div>
                            <div class="text-right w-1/4">
                                <!-- Line 1: Date -->
                                <p class="text-xl">
                                    {{
                                        cert.date
                                            ? new Date(cert.date).toLocaleDateString("en-US", {
                                                  year: "numeric",
                                                  month: "short",
                                              })
                                            : "N/A"
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Skills & Interests Section -->
                <section class="my-6 px-4">
                    <div class="flex items-center mb-4">
                        <Icon name="mdi:star-circle" class="inline-block w-8 h-8 mr-2 icon-color-override" size="32" />
                        <h2 class="text-3xl font-semibold">Skills & Interests</h2>
                    </div>
                    <div v-for="(skill, index) in cvData!.skillsAndInterests" :key="index" class="text-left">
                        <ul class="list-disc list-inside text-lg">
                            <li>
                                <span class="font-bold">{{ skill.area }}</span
                                >: {{ skill.details.join(", ") }}
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <!-- View Certificate Modal -->
        <dialog id="view_certificate_modal" class="modal">
            <div class="modal-box modal-color-override">
                <h3 class="text-xl font-bold">{{ selectedCertificate?.title }}</h3>
                <h4 class="text-md italic mb-2">
                    {{ selectedCertificate?.issuer }},
                    {{
                        selectedCertificate?.date
                            ? new Date(selectedCertificate.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                              })
                            : "N/A"
                    }}
                </h4>
                <figure v-if="selectedCertificate?.image" class="my-4">
                    <img
                        :src="selectedCertificate?.image"
                        :alt="`${selectedCertificate?.title} - ${selectedCertificate?.description}`"
                        class="w-full h-auto"
                    />
                    <figcaption class="text-md text-center mt-2">{{ selectedCertificate?.description }}</figcaption>
                </figure>
                <!-- <p class="py-4">Press ESC key or click the button below to close</p> -->
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

<style scoped>
* {
    font-family: "Noto Sans", Calibri, sans-serif;
}

.modal-color-override {
    background-color: #edece6;
    color: #1c1d1d;
}

.icon-color-override {
    color: #0d9488; /* Tailwind's teal-600 */
}

/* Print-specific styles for icons */
@media print {
    /* Force SVG icons to print */
    svg,
    .icon,
    [class*="icon"] {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    /* Ensure icons maintain their color */
    .icon-color-override {
        color: #0d9488 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    /* Make sure icon containers don't get hidden */
    .inline-block {
        display: inline-block !important;
    }
}
</style>
