<script setup lang="ts">
import { motion } from "motion-v";

const { theme, toggleTheme } = useTheme();
const isMobileMenuOpen = ref(false);
const activeSection = ref("welcome");
const isScrolled = ref(false);

const route = useRoute();
const shouldAnimate = computed(() => Boolean(route.meta.animateNavbar));

const navbarInitial = computed(() => (shouldAnimate.value ? { y: -30, opacity: 0 } : false));
const navbarAnimate = computed(() =>
    shouldAnimate.value
        ? {
              y: 0,
              opacity: 1,
              transition: { type: "spring" as const, stiffness: 140, damping: 16, delay: 1.65 },
          }
        : { y: 0, opacity: 1 },
);

const navLinks = [
    { label: "Welcome", targetId: "welcome", href: "/#welcome" },
    { label: "Experience & Education", targetId: "experience", href: "/#experience" },
    { label: "Projects", targetId: "projects", href: "/#projects" },
    { label: "About", targetId: "about", href: "/#about" },
];

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}

async function scrollToSection(targetId: string) {
    closeMobileMenu();

    if (route.path !== "/") {
        await navigateTo({ path: "/", hash: `#${targetId}` });
        return;
    }

    activeSection.value = targetId;
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

onMounted(() => {
    if (route.hash) {
        const targetId = route.hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
                activeSection.value = targetId;
            }, 150);
        }
    }

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 40;

        const sections = navLinks
            .map((link) => document.getElementById(link.targetId))
            .filter(Boolean) as HTMLElement[];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
                activeSection.value = section.id;
                break;
            }
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>
<template>
    <div>
        <motion.header
            :initial="navbarInitial"
            :animate="navbarAnimate"
            class="w-full font-mono relative bg-transparent"
        >
            <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="/#welcome"
                    class="text-sm sm:text-base font-bold tracking-tight text-base-content hover:text-primary transition-colors flex items-center gap-1.5"
                    @click.prevent="scrollToSection('welcome')"
                >
                    <span>Christopher Andrei Tayao.</span>
                </a>
                <div class="flex items-center space-x-2">
                    <button
                        class="p-2 text-base-content/80 hover:text-primary transition-all tooltip tooltip-bottom"
                        :data-tip="theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'"
                        aria-label="Toggle Theme"
                        @click="toggleTheme"
                    >
                        <Icon
                            :name="
                                theme === 'dark'
                                    ? 'material-symbols:light-mode-outline'
                                    : 'material-symbols:dark-mode-outline'
                            "
                            size="18"
                        />
                    </button>
                    <!-- Mobile Hamburger -->
                    <button
                        class="md:hidden p-2 text-base-content/80 hover:text-primary transition-colors"
                        aria-label="Toggle Navigation Menu"
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                    >
                        <Icon :name="isMobileMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'" size="20" />
                    </button>
                </div>
            </div>
            <!-- Mobile Dropdown Navigation -->
            <div v-if="isMobileMenuOpen" class="md:hidden border-t border-base-300/40 bg-base-100 px-6 py-4 space-y-3">
                <a
                    v-for="link in navLinks"
                    :key="link.targetId"
                    :href="link.href"
                    class="block py-1.5 text-sm transition-colors"
                    :class="
                        activeSection === link.targetId
                            ? 'text-primary font-semibold'
                            : 'text-base-content/80 hover:text-primary'
                    "
                    @click.prevent="scrollToSection(link.targetId)"
                >
                    {{ link.label }}
                </a>
            </div>
        </motion.header>
        <motion.nav
            :initial="navbarInitial"
            :animate="navbarAnimate"
            class="hidden md:flex fixed left-1/2 -translate-x-1/2 z-50 font-mono antialiased transition-[background-color,border-color,box-shadow,padding,border-radius] duration-300 ease-out items-center"
            :class="[
                isScrolled
                    ? 'top-4 px-6 py-2.5 rounded-full bg-base-200/90 backdrop-blur-xl border border-base-300/80 shadow-2xl space-x-6 lg:space-x-8 text-xs lg:text-sm'
                    : 'top-3.5 px-0 py-0 bg-transparent border-transparent shadow-none space-x-6 lg:space-x-8 text-xs lg:text-sm',
            ]"
        >
            <div v-for="link in navLinks" :key="link.targetId" class="relative py-1">
                <a
                    :href="link.href"
                    class="whitespace-nowrap transition-colors duration-200 block"
                    :class="
                        activeSection === link.targetId
                            ? 'text-primary font-bold'
                            : 'text-base-content/70 hover:text-base-content'
                    "
                    @click.prevent="scrollToSection(link.targetId)"
                >
                    {{ link.label }}
                </a>
                <motion.div
                    v-if="activeSection === link.targetId"
                    layout-id="active-nav-underline"
                    class="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary"
                    :transition="{ type: 'spring', stiffness: 380, damping: 30 }"
                />
            </div>
        </motion.nav>
    </div>
</template>
