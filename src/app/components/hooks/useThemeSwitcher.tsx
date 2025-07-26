import { useEffect, useState, Dispatch, SetStateAction } from "react";

export default function useTheme(): [ "light" | "dark", Dispatch<SetStateAction<"light" | "dark">> ] {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const preferred = saved || (system ? "dark" : "light");
    setMode(preferred as "light" | "dark");
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
}
