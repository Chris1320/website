export type ThemeMode = "light" | "dark";

export const useTheme = () => {
    const themeCookie = useCookie<ThemeMode>("theme", {
        default: () => "light",
        sameSite: "lax",
    });

    const theme = useState<ThemeMode>("app-theme", () => themeCookie.value || "light");

    const setTheme = (newTheme: ThemeMode, withTransition = true) => {
        theme.value = newTheme;
        themeCookie.value = newTheme;

        if (import.meta.client) {
            if (withTransition) {
                document.documentElement.classList.add("theme-transition");
            } else {
                document.documentElement.classList.remove("theme-transition");
            }
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    };

    const toggleTheme = () => {
        setTheme(theme.value === "light" ? "dark" : "light", true);
    };

    const initTheme = () => {
        if (import.meta.client) {
            if (!themeCookie.value) {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(prefersDark ? "dark" : "light", false);
            } else {
                setTheme(themeCookie.value, false);
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
