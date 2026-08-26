export type ThemeMode = "light" | "dark";

export const useTheme = () => {
    const theme = useState<ThemeMode>("app-theme", () => "light");

    const setTheme = (newTheme: ThemeMode) => {
        theme.value = newTheme;
        if (import.meta.client) {
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                themeColorMeta.setAttribute("content", newTheme === "dark" ? "#1e1e2e" : "#eff1f5");
            }
        }
    };

    const toggleTheme = () => {
        setTheme(theme.value === "light" ? "dark" : "light");
    };

    const initTheme = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem("theme") as ThemeMode | null;
            if (saved === "light" || saved === "dark") {
                setTheme(saved);
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(prefersDark ? "dark" : "light");
            }
        }
    };

    return {
        theme,
        setTheme,
        toggleTheme,
        initTheme,
    };
};
