"use client"
import useTheme from "./hooks/useThemeSwitcher"
import { SunIcon, MoonIcon } from "../components/Icons"

export default function ThemeToggle() {
  const [mode, setMode] = useTheme()

  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className="cursor-pointer transition-colors ml-2"
      aria-label="Alternar tema"
    >
      {mode === "dark" ? (
        <SunIcon className="w-6 dark:text-white" />
      ) : (
        <MoonIcon className="w-6"/>
      )}
    </button>
  )
}
