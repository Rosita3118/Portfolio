"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/config/personalInfo";
import { colorConfig } from "@/config/colors";
import Image from "next/image";

interface HomeSectionProps {
    isDarkMode: boolean;
    setActiveSection: (section: "INICIO" | "SOBRE_MI" | "CONTACTO") => void;
    variants: any;
}

export default function HomeSection({ isDarkMode, setActiveSection, variants }: HomeSectionProps) {
    const colors = isDarkMode ? colorConfig.dark : colorConfig.light;

    return (
        <motion.section
            key="INICIO"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="max-w-6xl text-center"
        >
            {/* Logo/Icon con tu imagen */}
            <div className="mb-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl flex items-center justify-center overflow-hidden border-4 border-pink-400">
                    <Image
                        src={personalInfo.images.profile}
                        alt={personalInfo.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>

            <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 ${colors.text}`}>
                <span style={{ color: colors.primary }}>{personalInfo.name}</span>
            </h1>

            <h2 className={`text-2xl md:text-3xl font-semibold mb-6`} style={{ color: colors.primary }}>
                {personalInfo.title}
            </h2>

            <div className={`text-lg mb-8 max-w-3xl mx-auto leading-relaxed ${colors.textSecondary}`}>
                <p className="mb-6 text-xl">
                    {personalInfo.description}
                </p>
            </div>

            {/* Información Personal */}
            <div className={`p-6 rounded-xl mb-8 max-w-2xl mx-auto ${colors.card} shadow-lg`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center">
                        <span className="mr-2">🎓</span>
                        <span>{personalInfo.education.university}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-2">💼</span>
                        <span>Desarrolladora Full Stack</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-2">📍</span>
                        <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-2">🌟</span>
                        <span>Especialista en UI/UX</span>
                    </div>
                </div>
            </div>

            {/* Destacados de competencias */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm max-w-5xl mx-auto`}>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-pink-50'}`}>
                    <div className="text-3xl mb-3">💫</div>
                    <div className="font-semibold mb-2" style={{ color: colors.primary }}>Innovación</div>
                    <div className={colors.textSecondary}>Creo soluciones tecnológicas creativas que resuelven problemas reales.</div>
                </div>

                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-pink-50'}`}>
                    <div className="text-3xl mb-3">🎯</div>
                    <div className="font-semibold mb-2" style={{ color: colors.primary }}>Precisión</div>
                    <div className={colors.textSecondary}>Desarrollo aplicaciones con atención al detalle y excelencia.</div>
                </div>

                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-pink-50'}`}>
                    <div className="text-3xl mb-3">🤝</div>
                    <div className="font-semibold mb-2" style={{ color: colors.primary }}>Colaboración</div>
                    <div className={colors.textSecondary}>Trabajo en equipo para lograr soluciones integrales.</div>
                </div>
            </div>

            {/* Sección de capacidades */}
            <div className={`mb-8 p-6 rounded-xl ${colors.card} max-w-4xl mx-auto shadow-lg`}>
                <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                    Mis Especialidades
                </h3>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 text-sm`}>
                    {personalInfo.specialties.map((specialty, index) => (
                        <div key={index} className={`flex items-center justify-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                            <span className="font-semibold">{specialty}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() => {
                        setActiveSection("SOBRE_MI");
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className={`px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg ${colorConfig.dark.button}`}
                >
                    Mi CV
                </button>

                <button
                    onClick={() => {
                        setActiveSection("CONTACTO");
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className={`px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg ${colors.button}`}
                >
                    Contáctame
                </button>
            </div>
        </motion.section>
    );
}