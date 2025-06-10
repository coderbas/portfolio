// src/app/components/Contact.tsx
'use client';

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMsg(data.error || 'Failed to send. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative bg-white dark:bg-gray-900 
        transition-colors duration-300
        px-6 lg:px-24 py-16
      "
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 pointer-events-none dark:bg-[url('/images/triangle.svg')] dark:bg-black/80 dark:bg-blend-overlay" />

      <SectionHeading id="contact">Get In Touch</SectionHeading>

      {/* Brighter paragraph text: dark:text-gray-100 */}
      <p className="mt-4 text-lg font-sans text-gray-800 dark:text-gray-100 max-w-2xl">
        I’m always open to new opportunities, freelance projects, or just a friendly chat.
        Feel free to reach me at{' '}
        <a
          href="mailto:basitbuhari@gmail.com"
          className="inline-flex items-center text-indigo-500 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors"
        >
          <FaEnvelope className="mr-1" /> basitbuhari@gmail.com
        </a>{' '}
        or call me at{' '}
        <a
          href="tel:+971507971051"
          className="inline-flex items-center text-indigo-500 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors"
        >
          <FaPhoneAlt className="mr-1" /> +971 507 971 051
        </a>
        .
      </p>

      {!submitted ? (
        <form className="mt-8 max-w-2xl relative z-10" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              className="
                block w-full px-4 py-3 
                bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                rounded-lg border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="
                block w-full px-4 py-3 
                bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                rounded-lg border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={loading}
              className="
                block w-full px-4 py-3 
                bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                rounded-lg border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </div>

          {/* Error Message (bright red) */}
          {errorMsg && (
            <p className="mb-4 text-red-500 text-center font-medium">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex items-center justify-center 
              px-6 py-3 rounded-full 
              bg-gradient-to-tr from-indigo-500 to-blue-500 
              text-white font-medium 
              hover:from-indigo-600 hover:to-blue-600 
              transition-colors shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div className="mt-8 max-w-2xl relative z-10">
          <div className="flex flex-col items-center 
                          bg-green-50 dark:bg-green-800 
                          border border-green-400 dark:border-green-500 
                          rounded-lg p-6 shadow-lg">
            <FaCheckCircle className="text-green-600 dark:text-green-100 text-5xl mb-2" />
            <h3 className="text-2xl font-semibold text-green-700 dark:text-gray-100 mb-1">
              Your message has been sent!
            </h3>
            <p className="text-gray-800 dark:text-gray-100 text-center">
              Thank you for reaching out. I’ll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
