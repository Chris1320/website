<script setup lang="ts">
import type { CurriculumVitae } from "~/utils/models/cv";

const props = defineProps<{
    showImage: boolean;
    fancyMode: boolean;
}>();

const { data: cvData, pending, error } = await useFetch<CurriculumVitae>("/data/cv.json", { server: false });
</script>

<template>
    <!-- Set the max/min width to 1439px to keep the design -->
    <main class="mx-auto max-w-[1439px] min-w-[1439px] min-h-screen">
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
                        <div class="w-40 rounded-2xl object-cover border-2 border-teal-900">
                            <img :src="cvData!.imageUrl" alt="Image" />
                        </div>
                    </div>
                    <!-- Header Right side -->
                    <div>
                        <!-- Full Name -->
                        <NuxtLink to="/">
                            <h1 class="text-4xl font-bold pb-2">{{ cvData!.name }}</h1>
                        </NuxtLink>
                        <!-- Overview -->
                        <div class="gap-4 pb-5 pl-2">
                            <NuxtLink
                                :to="cvData!.overview.email.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <Icon name="mdi:email" class="inline-block w-4 h-4 mr-1" />
                                <span class="pb-1">{{ cvData!.overview.email.display }}</span>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.phone.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <Icon name="mdi:phone" class="inline-block w-4 h-4 mr-1" />
                                <span class="pb-1">{{ cvData!.overview.phone.display }}</span>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.website.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <p>
                                    <Icon name="mdi:web" class="inline-block w-4 h-4 mr-1" />
                                    <span class="pb-1">{{ cvData!.overview.website.display }}</span>
                                </p>
                            </NuxtLink>
                            <NuxtLink
                                :to="cvData!.overview.location.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <p>
                                    <Icon name="mdi:map-marker" class="inline-block w-4 h-4 mr-1" />
                                    <span class="pb-1">{{ cvData!.overview.location.display }}</span>
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <hr />
                <!-- Education Section -->
                <section class="my-6 px-4">
                    <h2 class="text-2xl font-semibold mb-4">Education</h2>
                    <div v-for="(edu, index) in cvData!.education" :key="index" class="mb-4 text-left">
                        <!-- Line 1: Institution | Location -->
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-bold">{{ edu.institution }}</h3>
                            <p class="text-lg">
                                {{ edu.location }}
                            </p>
                        </div>
                        <!-- Line 2: Degree, Concentration, GWA | Start Date - End Date -->
                        <div class="flex justify-between items-center">
                            <p class="italic">
                                {{ edu.degree }}, {{ edu.concentration }}.
                                <span v-if="edu.GWA">GWA: {{ edu.GWA }}</span>
                            </p>
                            <p>
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
                        <!-- List of relevant coursework -->
                        <ul class="list-disc list-inside">
                            <li v-if="edu.thesisTitle">Thesis: {{ edu.thesisTitle }}</li>
                            <li v-if="edu.relevantCoursework.length">
                                Relevant Coursework: {{ edu.relevantCoursework.join(", ") }}
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- Experience Section -->
                <section class="my-6 px-4">
                    <h2 class="text-2xl font-semibold mb-4">Experience</h2>
                    <div v-for="(work, index) in cvData!.experience" :key="index" class="mb-4 text-left">
                        <!-- Line 1: Role | Location -->
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-bold">{{ work.role }}</h3>
                            <p class="text-lg">
                                {{ work.location }}
                            </p>
                        </div>
                        <!-- Line 2: Organization | Start Date - End Date -->
                        <div class="flex justify-between items-center">
                            <p class="italic">
                                {{ work.organization }}
                            </p>
                            <p>
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
                        <!-- List of responsibilities -->
                        <ul class="list-disc list-inside">
                            <li v-for="(resp, rIndex) in work.responsibilities" :key="rIndex">{{ resp }}</li>
                        </ul>
                    </div>
                </section>
                <!-- Awards & Certificates Section -->
                <section class="my-6 px-4">
                    <h2 class="text-2xl font-semibold mb-4">Awards & Certificates</h2>
                    <div v-for="(cert, index) in cvData!.awardsAndCertificates" :key="index" class="mb-4 text-left">
                        <!-- Line 1: Title | Date -->
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-bold">{{ cert.title }}</h3>
                            <p class="text-lg">
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
                        <p class="italic">{{ cert.issuer }}</p>
                        <p v-if="cert.description" class="text-sm">{{ cert.description }}</p>
                        <p v-if="cert.link" class="text-xs">
                            <NuxtLink :to="cert.link" target="_blank" rel="noopener noreferrer">{{
                                cert.link
                            }}</NuxtLink>
                        </p>
                    </div>
                </section>
                <!-- Skills & Interests Section -->
                <section class="my-6 px-4">
                    <h2 class="text-2xl font-semibold mb-4">Skills & Interests</h2>
                    <div v-for="(skill, index) in cvData!.skillsAndInterests" :key="index" class="text-left">
                        <ul class="list-disc list-inside">
                            <li>
                                <span class="font-bold">{{ skill.area }}</span
                                >: {{ skill.details.join(", ") }}
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<style scoped>
* {
    font-family: "Noto Sans", Calibri, sans-serif;
}
</style>
