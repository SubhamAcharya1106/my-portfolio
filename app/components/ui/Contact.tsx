'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const closeModal = () => setShowSuccessModal(false);

  return (
    <section
      id="contact"
      className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto text-center z-10">
        {/* 🔥 Animated Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Have something exciting to test,<br /> collaborate or crash on purpose?
        </motion.h2>

        {/* ✨ Animated Paragraph */}
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a product that needs breaking before it breaks users? I’m your guy.
          Let’s connect — I find bugs before your users do. Over chai, code, or conversation.
        </motion.p>

        {/* ✅ Contact Form */}
       <form
  action="https://formspree.io/f/xanjqbyo"
  method="POST"
  onSubmit={(e) => {
    e.preventDefault(); // 
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    }).then(() => {
      setShowSuccessModal(true);
      form.reset(); 
    });
  }}
>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            pattern="[A-Za-z\s]+"
            title="Only letters and spaces allowed"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            required
            pattern="\+?[0-9]+"
            title="Only digits and optional '+' allowed"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        {/* ✅ Animated "Connect with me" Line (Moved Below) */}
        <motion.p
          className="text-md text-gray-400 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/subham-acharya/"
            className="text-sky-400 hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          or drop a mail at{' '}
          <a
            href="mailto:subham2639@gmail.com"
            className="text-sky-400 hover:underline"
          >
            subham2639@gmail.com
          </a>
        </motion.p>
      </div>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-sm mx-auto text-center shadow-lg"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Wooohoooooo!!! 🎉
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Thank you for sharing your details. I will get back to you as early as possible.
              </p>
              <button
                onClick={closeModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
