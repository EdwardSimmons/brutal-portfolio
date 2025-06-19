import { useTheme } from "./themeProvider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
