"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/config/personalInfo";
import { colorConfig } from "@/config/colors";

import Image from "next/image";

interface AboutSectionProps {
    isDarkMode: boolean;
    variants: any;
    cardClasses: string;
}

export default function AboutSection({ isDarkMode, variants, cardClasses }: AboutSectionProps) {
    const colors = isDarkMode ? colorConfig.dark : colorConfig.light;

    return (
        <motion.section
            key="SOBRE_MI"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="max-w-6xl mx-auto w-full"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: colors.primary }}>
                Sobre Mí
            </h2>

            {/* Perfil Principal */}
            <div className={`rounded-xl p-8 mb-8 shadow-xl ${cardClasses}`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src={personalInfo.images.profile}
                                alt={personalInfo.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className={`text-3xl font-bold mb-2 ${colors.text}`}>
                            {personalInfo.name}
                        </h3>
                        <p className={`text-xl mb-4`} style={{ color: colors.primary }}>
                            {personalInfo.title}
                        </p>
                        <p className={`text-lg ${colors.textSecondary}`}>
                            {personalInfo.description} que mejoren la vida de las personas y optimicen procesos empresariales.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Educación */}
                <div className={`rounded-xl p-6 shadow-lg ${cardClasses}`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center ${colors.text}`}>
                        <span className="text-3xl mr-3">🎓</span>
                        Educación
                    </h3>

                    <div className="space-y-4">
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-pink-50'}`}>
                            <h4 className={`font-bold text-lg mb-1`} style={{ color: colors.primary }}>
                                {personalInfo.education.degree}
                            </h4>
                            <p className={`font-semibold ${colors.text}`}>
                                {personalInfo.education.university}
                            </p>
                            <p className={`text-sm ${colors.textSecondary}`}>
                                {personalInfo.education.period} | {personalInfo.education.semester}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Habilidades Técnicas */}
                <div className={`rounded-xl p-6 shadow-lg ${cardClasses}`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center ${colors.text}`}>
                        <span className="text-3xl mr-3">💻</span>
                        Habilidades Técnicas
                    </h3>

                    <div className="space-y-3">
                        {personalInfo.technicalSkills.map((skill, index) => (
                            <div key={index} className={`flex items-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-pink-50'}`}>
                                <span style={{ color: colors.primary }} className="mr-3">✓</span>
                                <span className={colors.textSecondary}>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div className={`rounded-xl p-6 shadow-lg ${cardClasses}`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center ${colors.text}`}>
                        <span className="text-3xl mr-3">🌟</span>
                        Habilidades Blandas
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {personalInfo.softSkills.map((skill, index) => (
                            <div key={index} className={`text-center p-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-pink-50'}`}>
                                <span className={`text-sm font-medium ${colors.textSecondary}`}>
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Idiomas */}
                <div className={`rounded-xl p-6 shadow-lg ${cardClasses}`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center ${colors.text}`}>
                        <span className="text-3xl mr-3">🌎</span>
                        Idiomas
                    </h3>

                    <div className="space-y-4">
                        {personalInfo.languages.map((language, index) => (
                            <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-pink-50'}`}>
                                <h4 className={`font-bold text-lg mb-2`} style={{ color: colors.primary }}>
                                    {language.name}
                                </h4>
                                <p className={colors.textSecondary}>{language.level}</p>
                                <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                                    <div className="h-2 rounded-full" style={{
                                        width: `${language.percentage}%`,
                                        backgroundColor: colors.primary
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mensaje de Motivación */}
            <div className={`mt-8 rounded-xl p-8 shadow-xl ${cardClasses}`}>
                <h3 className={`text-2xl font-bold mb-6 text-center ${colors.text}`}>
                    Mi Motivación
                </h3>
                <div className={`text-lg text-center italic leading-relaxed ${colors.textSecondary}`}>
                    "{personalInfo.motivation}"
                </div>

                <div className={`text-center mt-6 text-sm`} style={{ color: colors.primary }}>
                    - {personalInfo.name}
                </div>
            </div>
        </motion.section>
    );
}