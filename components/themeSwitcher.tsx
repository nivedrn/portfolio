import { Icons } from "@/components/icons";
import { useAppStore } from "@/state/appState";
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { appTheme, setAppTheme } = useAppStore();
    const { setTheme } = useTheme();

    const toggleTheme = () => {
        if (appTheme === "light") {
            setAppTheme("dark");
            setTheme("dark");
        } else {
            setAppTheme("light");
            setTheme("light");
        }
    }

    return (
        <div>
            <Button variant="ghost" size="icon" className="m-0" onClick={toggleTheme}>
                {appTheme === "light" ?
                    <Icons.sun className="mx-auto h-7 w-7 opacity-25" /> :
                    <Icons.moon className="mx-auto h-7 w-7 opacity-25" />
                }
            </Button>
        </div>
    );
}
