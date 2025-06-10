'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiTool,
  FiServer,
  FiCloud,
  FiLayers,
  FiCpu,
  FiBarChart2,
  FiBox,
  FiGrid,
  FiTerminal,
  FiMonitor,
  FiActivity,
  FiZap,
  FiPackage,
} from 'react-icons/fi';

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    });
  }, [controls]);

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '250+', label: 'Test Cases' },
    { value: '200+', label: 'Bugs Found' },
    { value: '40%', label: 'Crash Reduction' },
  ];

  const tools = [
    { icon: <FiCode />, name: 'Postman', category: 'API' },
    { icon: <FiDatabase />, name: 'JIRA', category: 'Tracking' },
    { icon: <FiServer />, name: 'JMeter', category: 'Load' },
    { icon: <FiSmartphone />, name: 'Android', category: 'Mobile' },
    { icon: <FiCloud />, name: 'TestFlight', category: 'iOS' },
    { icon: <FiLayers />, name: 'Selenium', category: 'Automation' },
    { icon: <FiCpu />, name: 'Playwright', category: 'E2E' },
    { icon: <FiBarChart2 />, name: 'LoadRunner', category: 'Performance' },
    { icon: <FiBox />, name: 'SQL', category: 'Database' },
    { icon: <FiGrid />, name: 'MongoDB', category: 'NoSQL' },
    { icon: <FiTerminal />, name: 'Git', category: 'Version Control' },
    { icon: <FiMonitor />, name: 'BrowserStack', category: 'Cross-Browser' },
    { icon: <FiActivity />, name: 'New Relic', category: 'Monitoring' },
    { icon: <FiZap />, name: 'Cypress', category: 'Automation' },
    { icon: <FiPackage />, name: 'Docker', category: 'Containers' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I don't just <span className="text-blue-600">find bugs</span>,
            <br />
            I prevent <span className="text-red-500">user frustration</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Image + Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={controls}
  transition={{ delay: 0.2 }}
  className="w-full lg:w-1/2"
>
  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-xl mx-auto max-w-md">
    <div className="bg-white dark:bg-gray-800 overflow-hidden">
      <img 
        src="/my-portfolio/image/subham1.jpg"
        alt="Subham Acharya"
        width={400}
        height={400}
        className="object-cover w-[900px] h-[600px]"
        loading="lazy"
      />
    </div>
  </div>
</motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
              <p>
                I’m a dedicated QA Engineer with a passion for ensuring products work flawlessly
                before users ever encounter them.
              </p>
              <p>
                With over 3 years in quality assurance, I’ve tested complex workflows, dug into
                critical bugs, and enhanced performance — across web, mobile, and APIs.
              </p>
              <p>
                I'm not just a bug-hunter. I strive to build confidence in every release by thinking
                like a user and testing like a machine.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Arsenal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            My <span className="text-blue-600">Technical Arsenal</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="text-blue-500 text-xl mb-2">{tool.icon}</div>
                <p className="text-sm font-medium">{tool.name}</p>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
