// src/app/layout.tsx
import './globals.css';
import Providers from './Providers';
import NavLinks from './components/NavLinks';
import ThemeToggle from './components/ThemeToggle';
import FooterNails from './components/FooterNails';


export const metadata = {
  title: 'Basit Buhari | Portfolio',
  description: 'Basit Buhari – Full-Stack Developer & Cybersecurity Enthusiast',
  icons: {
    icon: '/favicon.ico',      // primary favicon
    shortcut: '/favicon.ico',  // the “pin to home screen” icon
    apple: '/favicon.ico',     // fallback for Apple devices (you can also supply Apple Touch icon)
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-gray-200 transition-colors duration-300">
        <Providers>
          {/* Fixed Header */}
          <header className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    {/* Instead of plain text, show logo + name */}
    <a href="/" className="flex items-center space-x-2">
      <img src="/logo.svg" alt="BasitB Logo" className="h-8 w-8" />
      <span className="text-2xl font-bold font-sans text-gray-900 dark:text-white">
        BasitB
      </span>
    </a>
    <NavLinks />
    <ThemeToggle />
  </div>
</header>

          {/* Main Content */}
          <main className="pt-20">{children}</main>

          {/* Footer */}
          <FooterNails />
        </Providers>
      </body>
    </html>
  );
}
