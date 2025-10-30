"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { colorConfig } from "@/config/colors";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"INICIO" | "SOBRE_MI" | "CONTACTO">("INICIO");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const colors = isDarkMode ? colorConfig.dark : colorConfig.light;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${colors.background} ${colors.text}`}>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-16">
        <AnimatePresence mode="wait">
          {activeSection === "INICIO" && (
            <HomeSection
              isDarkMode={isDarkMode}
              setActiveSection={setActiveSection}
              variants={variants}
            />
          )}

          {activeSection === "SOBRE_MI" && (
            <AboutSection
              isDarkMode={isDarkMode}
              variants={variants}
              cardClasses={colors.card}
            />
          )}

          {activeSection === "CONTACTO" && (
            <ContactSection
              isDarkMode={isDarkMode}
              variants={variants}
              cardClasses={colors.card}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}