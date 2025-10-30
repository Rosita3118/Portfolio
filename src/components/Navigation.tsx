"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { colorConfig } from "@/config/colors";
import { navigationSections } from "@/config/navigation";

interface NavigationProps {
    activeSection: "INICIO" | "SOBRE_MI" | "CONTACTO";
    setActiveSection: (section: "INICIO" | "SOBRE_MI" | "CONTACTO") => void;
    isDarkMode: boolean;
    setIsDarkMode: (mode: boolean) => void;
}

export default function Navigation({ activeSection, setActiveSection, isDarkMode, setIsDarkMode }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const colors = isDarkMode ? colorConfig.dark : colorConfig.light;

    const navClasses = isDarkMode
        ? "bg-slate-900/50 border-slate-700/30"
        : "bg-white/50 border-pink-200/30";

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSectionChange = (section: "INICIO" | "SOBRE_MI" | "CONTACTO") => {
        setActiveSection(section);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getFormattedTitle = (section: string) => {
        if (section === "SOBRE_MI") return "Sobre Mí";
        return section.charAt(0) + section.slice(1).toLowerCase();
    };

    return (
        <nav className={`p-4 fixed top-0 w-full z-50 backdrop-blur-lg ${navClasses}`}>
            <div className="flex justify-between items-center">
                {/* Navegación Desktop */}
                <div className="hidden md:flex justify-center space-x-8 flex-1">
                    {navigationSections.map((section) => (
                        <button
                            key={section}
                            onClick={() => handleSectionChange(section)}
                            className={`uppercase font-semibold tracking-wide px-4 py-2 rounded-md transition-all duration-300 ${activeSection === section
                                ? colors.button
                                : isDarkMode
                                    ? "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    : "text-slate-700 hover:bg-pink-400 hover:text-white"
                                }`}
                        >
                            {section}
                        </button>
                    ))}
                </div>

                {/* Título Mobile y Hamburger Menu */}
                <div className="md:hidden flex items-center flex-1">
                    <button
                        onClick={toggleMenu}
                        className={`p-2 rounded-md transition-all duration-300 ${isDarkMode
                            ? "text-slate-300 hover:bg-slate-700"
                            : "text-slate-700 hover:bg-pink-200"
                            }`}
                        aria-label="Menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 transition-all duration-300 ${isDarkMode ? "bg-slate-300" : "bg-slate-700"
                                } ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
                            <span className={`block w-5 h-0.5 my-1 transition-all duration-300 ${isDarkMode ? "bg-slate-300" : "bg-slate-700"
                                } ${isMenuOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-5 h-0.5 transition-all duration-300 ${isDarkMode ? "bg-slate-300" : "bg-slate-700"
                                } ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
                        </div>
                    </button>

                    {/* Título de la sección activa */}
                    <h1 className={`ml-3 text-lg font-semibold ${colors.text}`}>
                        {getFormattedTitle(activeSection)}
                    </h1>
                </div>

                {/* Botón modo oscuro */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
                        ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                        : "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                        }`}
                    title={isDarkMode ? "Modo claro" : "Modo oscuro"}
                >
                    {isDarkMode ? "☀️" : "🌙"}
                </button>
            </div>

            {/* Menu Mobile - Dropdown */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`md:hidden overflow-hidden ${isDarkMode ? "bg-slate-900/95" : "bg-white/95"
                    } backdrop-blur-lg rounded-lg mt-4`}
                style={{ display: isMenuOpen ? "block" : "none" }}
            >
                <div className="flex flex-col space-y-2 p-4">
                    {navigationSections.map((section) => (
                        <button
                            key={section}
                            onClick={() => {
                                handleSectionChange(section);
                                setIsMenuOpen(false);
                            }}
                            className={`uppercase font-semibold tracking-wide px-4 py-3 rounded-md transition-all duration-300 text-left ${activeSection === section
                                ? colors.button
                                : isDarkMode
                                    ? "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    : "text-slate-700 hover:bg-pink-400 hover:text-white"
                                }`}
                        >
                            {section}
                        </button>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}