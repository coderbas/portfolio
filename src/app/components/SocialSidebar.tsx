// src/app/components/SocialSidebar.tsx
'use client';

import React from 'react';

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12c0 4.43 2.87 8.19 6.84 9.52.5.09.66-.22.66-.49
         0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61
         1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95
         0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004
         1.71.11 2.51.32 1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67
         0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.49A10 10 0 
         0022 12c0-5.52-4.48-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14a5 5 0 005-5V5a5 
       5 0 00-5-5zM7.12 20H3.5V8h3.62v12zm-1.81-13.64a2.1 2.1 0 112.1-2.1 2.1 
       2.1 0 01-2.1 2.1zM20 20h-3.62v-5.92c0-1.4-.03-3.2-1.95-3.2-1.95 
       0-2.25 1.53-2.25 3.1V20h-3.62V8h3.48v1.64h.05c.48-.9 1.65-1.82 
       3.4-1.82 3.64 0 4.31 2.4 4.31 5.5V20z" />
  </svg>
);

export default function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed flex-col left-6 bottom-6 space-y-4 z-40">
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2 rounded-full bg-gray-800/75 
          hover:bg-primary-light dark:hover:bg-primary-dark 
          transition-colors transform hover:scale-110
        "
      >
        <GitHubIcon className="text-white" />
      </a>
      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2 rounded-full bg-gray-800/75 
          hover:bg-primary-light dark:hover:bg-primary-dark 
          transition-colors transform hover:scale-110
        "
      >
        <LinkedInIcon className="text-white" />
      </a>
    </div>
  );
}
