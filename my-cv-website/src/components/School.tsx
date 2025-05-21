"use client";

import { motion } from "framer-motion";

export default function School() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-10 text-left py-10"
        >
            <h2 className="text-6xl font-semibold text-gray-800">Education</h2>

            <div className="relative max-w-6xl mx-auto mt-6">
                <ol className="border-l border-gray-700">
                    {/* CMI Montpellier */}
                    <li className="mb-10 ml-6 relative">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full -left-11 top-0"></span>
                        <div className="pl-10">
                            <h3 className="text-3xl text-left font-semibold text-indigo-600">CMI - Montpellier Science University</h3>
                            <p className="italic text-lg text-gray-500">Bachelor&apos;s Degree | 2020 - 2023</p>
                            <p className="mt-4 text-gray-700">
                                The &quot;Cursus Master en Ingénierie&quot; (CMI) is a demanding five-year engineering track integrated into the university, offering both theoretical and practical training. I completed the first three years of this program at Montpellier Science University, earning a Bachelor's degree (&quot;Licence&quot;).
                            </p>
                            <p className="mt-4 text-gray-700">
                                Throughout these years, I gained a strong foundation in computer science, mathematics, and software engineering. The program emphasized both academic excellence and hands-on experience through lab work and projects, preparing me for advanced studies and real-world technical challenges.
                            </p>
                        </div>
                    </li>

                    {/* EPSI Montpellier */}
                    <li className="mb-10 ml-6 relative">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-teal-600 rounded-full -left-11 top-0"></span>

                        <div className="pl-10">
                            <h3 className="text-3xl font-semibold text-left text-teal-600">EPSI - Montpellier</h3>
                            <p className="italic text-lg text-gray-500">Master&apos;s Degree | 2023 - 2025</p>
                            <p className="mt-4 text-gray-700">
                                EPSI is a renowned school for IT and software engineering, offering specialized and practical training aligned with industry needs. I joined EPSI in 2023 to pursue a Master's degree in computer science.
                            </p>
                            <p className="mt-4 text-gray-700">
                                This program is structured around project-based learning, professional development, and deep technical training in areas like software architecture, DevOps, and  data engineering. It has significantly enhanced my expertise and prepared me for complex engineering roles.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </motion.section>
    );
}
