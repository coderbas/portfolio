// File: website/src/app/username-checker/page.tsx
'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

function BubbleBackground() {
  const bubbleTexts = [
    'alpha', 'beta', 'gamma', 'delta', 'epsilon',
    'zeta', 'theta', 'lambda', 'sigma', 'omega',
    'neural', 'matrix', 'quantum', 'cyber', 'crypto',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbleTexts.map((text, idx) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 14 + Math.random() * 28; // 14px–42px
        const duration = 8 + Math.random() * 8; // 8s–16s
        const delay = Math.random() * 6; // 0s–6s

        return (
          <span
            key={idx}
            className="absolute text-gray-500 dark:text-gray-600 opacity-40 bubble-glow"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: `${size}px`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            }}
          >
            {text}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .bubble-glow {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}

export default function UsernameCheckerPage() {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'taken' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const checkUsername = async () => {
    const name = username.trim();
    if (!name) return;
    setStatus('checking');
    setErrorMsg('');

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(name)}`);
      if (res.status === 404) {
        setStatus('available');
      } else if (res.status === 200) {
        setStatus('taken');
      } else {
        setStatus('error');
        setErrorMsg(`Received HTTP ${res.status}`);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Network error');
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Floating bubble background */}
      <BubbleBackground />

      {/* Centered card */}
      <div className="relative z-10 w-full max-w-lg px-8 py-10 bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700">
        <div className="flex items-center justify-center mb-6">
          <FaGithub className="text-4xl text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-center mb-2">GitHub Username Checker</h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Type a GitHub username below and click “Check” to see if it exists.
        </p>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && checkUsername()}
            className="flex-1 px-4 py-3 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
          />
          <button
            onClick={checkUsername}
            disabled={status === 'checking' || !username.trim()}
            className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-r-lg transition`}
          >
            {status === 'checking' ? 'Checking…' : 'Check'}
          </button>
        </div>

        <div className="h-12 flex items-center justify-center mt-2">
          {status === 'available' && (
            <div className="text-xl text-green-400 font-medium flex items-center space-x-2">
              <span>🎉</span>
              <span>
                &ldquo;{username}&rdquo; is available!
              </span>
            </div>
          )}
          {status === 'taken' && (
            <div className="text-xl text-red-400 font-medium flex items-center space-x-2">
              <span>🚫</span>
              <span>
                &ldquo;{username}&rdquo; is already taken.
              </span>
            </div>
          )}
          {status === 'error' && (
            <div className="text-md text-yellow-400 font-medium flex items-center space-x-2">
              <span>⚠️</span>
              <span>Error: {errorMsg || 'Something went wrong.'}</span>
            </div>
          )}
        </div>
      </div>

      <footer className="relative z-10 mt-8 text-xs text-gray-500 text-center">
        Powered by{' '}
        <a
          href="https://api.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub REST API
        </a>
      </footer>
    </main>
  );
}
