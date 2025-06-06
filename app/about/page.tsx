'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
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
  FiPackage
} from 'react-icons/fi';

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    });
  }, [controls]);

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "250+", label: "Test Cases" },
    { value: "200+", label: "Bugs Found" },
    { value: "40%", label: "Crash Reduction" }
  ];

  return (
    <section id="about" className="min-h-screen py-12 md:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
            <span className="block">I don't just <span className="text-blue-600 dark:text-blue-400">find bugs</span>,</span>
            <span className="block">I prevent <span className="text-red-500 dark:text-red-400">user frustration</span></span>
          </h1>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-2xl shadow-xl mx-auto max-w-md">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="/images/subham2.jpg" 
                  alt="Subham Acharya"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
                I have a passion for creating flawless digital experiences. With over 3 years in QA, I've developed a keen eye for spotting issues before they reach users.
              </p>
              
              <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
                My approach combines <strong className="text-gray-800 dark:text-white">technical expertise</strong> with <strong className="text-gray-800 dark:text-white">user empathy</strong>. I don't just test software - I advocate for the end-user experience.
              </p>

              <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
                My toolkit spans <strong className="text-gray-800 dark:text-white">manual testing</strong>, <strong className="text-gray-800 dark:text-white">automation</strong>, and <strong className="text-gray-800 dark:text-white">performance testing</strong> across all platforms.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-3 md:p-4 rounded-lg border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-xs xs:text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-20"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white mb-6 md:mb-8">
            My <span className="text-blue-600 dark:text-blue-400">Technical Arsenal</span>
          </h3>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
            {[ 
              { icon: <FiCode className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Postman", category: "API" },
              { icon: <FiDatabase className="w-4 h-4 sm:w-5 sm:h-5" />, name: "JIRA", category: "Tracking" },
              { icon: <FiServer className="w-4 h-4 sm:w-5 sm:h-5" />, name: "JMeter", category: "Load" },
              { icon: <FiSmartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Android", category: "Mobile" },
              { icon: <FiCloud className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TestFlight", category: "iOS" },
              { icon: <FiLayers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Selenium", category: "Auto" },
              { icon: <FiCpu className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Playwright", category: "E2E" },
              { icon: <FiBarChart2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "LoadRunner", category: "Perf" },
              { icon: <FiBox className="w-4 h-4 sm:w-5 sm:h-5" />, name: "SQL", category: "DB" },
              { icon: <FiGrid className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MongoDB", category: "NoSQL" },
              { icon: <FiTerminal className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Git", category: "VCS" },
              { icon: <FiMonitor className="w-4 h-4 sm:w-5 sm:h-5" />, name: "BrowserStack", category: "Cross" },
              { icon: <FiActivity className="w-4 h-4 sm:w-5 sm:h-5" />, name: "New Relic", category: "Monitor" },
              { icon: <FiZap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Cypress", category: "Auto" },
              { icon: <FiPackage className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Docker", category: "Containers" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-2 sm:p-3 md:p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-xs sm:shadow-sm flex flex-col items-center text-center"
              >
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-2 sm:mb-3">
                  {tool.icon}
                </div>
                <h4 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 dark:text-white">{tool.name}</h4>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}