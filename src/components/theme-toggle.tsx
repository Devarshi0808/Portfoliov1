"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border border-white/20 shadow-md backdrop-blur-lg dark:bg-neutral-800/30 dark:border-neutral-700">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border border-white/20 shadow-md backdrop-blur-lg transition-all duration-300 hover:bg-white/60 hover:scale-110 dark:bg-neutral-800/30 dark:border-neutral-700 dark:hover:bg-neutral-800/60"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
} 