'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Wholesalers Module (Bijnis)',
    image: '',
    description:
      'Led UI and functional testing of this CRM-like system used by field managers. Validated MongoDB data integrity and helped reduce support queries by 30%.',
    stack: ['Manual Testing', 'MongoDB', 'Jira'],
    link: '',
    live: '',
  },
  {
    title: 'Sourcing App Migration (Bijnis)',
    image: '',
    description:
      'Tested migration from native Android to React Native. Ensured feature parity across platforms, reduced crash rate by 40%, and improved release velocity.',
    stack: ['Manual Testing', 'React Native', 'Android'],
    link: '',
    live: '',
  },
  {
    title: 'Dia Hotels',
    image: '/projects/dia.jpeg',
    description:
      'Tested booking flows, Razorpay integration, and real-time updates across Android, iOS & Web. Logged 20+ critical bugs during regression.',
    stack: ['Manual Testing', 'Postman', 'SQL', 'Razorpay'],
    link: 'https://diahotels.com/',
    live: '',
  },
  {
    title: 'Veera Games (Web3)',
    image: '',
    description:
      'Tested login, wallet integration, socket events, and smart contract behaviors. Identified key UI/UX bugs that improved player retention.',
    stack: ['Manual QA', 'Web3', 'Postman', 'Socket Testing'],
    link: '',
    live: '',
  },
  {
    title: 'WMS - Warehouse Management System (Bijnis)',
    image: '',
    description:
      'Handled UAT with end-users on-site in Ludhiana, validated key DB transactions, and ensured operational workflows matched real warehouse activities.',
    stack: ['Manual Testing', 'UAT', 'Database Testing'],
    link: '',
    live: '',
  },
  {
    title: 'Yuga - International Web App',
    image: '',
    description:
      'Tested this web-based competition platform end-to-end. Validated sockets, stability, and performance before live release at Indira Gandhi Stadium.',
    stack: ['End-to-End Testing', 'Web App QA', 'Socket Testing', 'Deployment Testing'],
    link: '',
    live: '',
  },
  {
    title: 'Factory App (Bijnis)',
    image: '',
    description:
      'Tested both Android and iOS versions during development. Maintained 95% app stability before rollout, covering regressions and key workflows.',
    stack: ['Mobile QA', 'Android', 'iOS', 'Regression Testing'],
    link: '',
    live: '',
  },
  {
    title: 'Store to Door',
    image: '',
    description:
      'B2C app used across Tier 2/3 cities. Performed system integration testing, validated wallet transactions, and tested end-to-end flow between retailer and customer modules.',
    stack: ['System Integration testing', 'Wallet Testing', 'Module Integration'],
    link: '',
    live: '',
  }
];

export default function Projects() {
  return (
    <section
      id="project"
      className="min-h-screen pt-32 px-4 sm:px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            QA <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, index) => {
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link
              ? {
                  href: project.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'group block overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.01] transition-transform duration-300 cursor-pointer relative',
                }
              : {
                  className:
                    'group overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.01] transition-transform duration-300 relative',
                };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Wrapper {...wrapperProps}>
                  {project.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20 sm:opacity-0 sm:group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  )}
                  <div className="relative z-10 p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm text-center">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-sm rounded-full text-indigo-700 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
