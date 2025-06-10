'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const experiences = [
  {
    company: "Ardem Data Solutions",
    role: "QA Engineer",
    period: "Jan 2023 – Present",
    location: "Remote",
    highlights: [
      "Performed end-to-end testing of GIS drawing platform",
      "Created 80+ test cases and conducted Postman-based API testing",
      "Improved test coverage by 35% through comprehensive bug logging"
    ]
  },
  {
    company: "Bijnis",
    role: "QA Engineer",
    period: "Mar 2022 – Oct 2024",
    location: "Delhi/Hybrid",
    highlights: [
      "Led QA for B2B e-commerce platforms across Android, iOS, and web",
      "Designed 250+ manual test cases for critical workflows",
      "Improved response times by 20% during peak traffic"
    ]
  },
  {
    company: "Logicbuds",
    role: "Associate QA Engineer",
    period: "June 2021 – Mar 2022",
    location: "Remote",
    highlights: [
      "Executed manual and API testing for health e-pharma platform",
      "Validated 50+ critical flows including medicine tracking",
      "Reduced post-release issues by 30%"
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="experience" className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background floating blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-800 blur-3xl rounded-full opacity-30"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1.2, 1.7, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-900 blur-3xl rounded-full opacity-30"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-white">
          Work <span className="text-sky-500">Experience</span>
        </h2>
        <motion.div
          layoutId="underline"
          className="w-24 h-1 mt-4 bg-gradient-to-r from-sky-700 to-sky-800 mx-auto rounded-full"
        />
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: index * 0.3 },
              },
            }}
            initial="hidden"
            animate={controls}
            className="relative flex items-start gap-6"
          >
            {/* Animated Dot + Line */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="w-5 h-5 rounded-full bg-sky-800 shadow-xl border-4 border-white dark:border-gray-900 z-10"
                animate={{
                  scale: [1, 1.4, 1],
                  boxShadow: [
                    "0 0 0px #0c4a6e",
                    "0 0 16px #0c4a6e",
                    "0 0 0px #0c4a6e",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="w-1 bg-gradient-to-b from-sky-700 to-sky-900 flex-1 mt-1" />
            </div>

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-white/10 backdrop-blur-lg text-white rounded-2xl p-6 flex-1 shadow-2xl hover:shadow-sky-800/30 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-sky-400">
                  {exp.role} <span className="text-white">at</span> {exp.company}
                </h3>
                <div className="text-sm flex gap-4 text-gray-300">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="text-sky-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-sky-500" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="mt-4 space-y-3">
                {exp.highlights.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.3 + i * 0.15 }}
                    className="flex items-start gap-2 text-gray-100"
                  >
                    <FiCheck className="mt-1 text-sky-500" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
