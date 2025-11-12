import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return 'light';

    // Check localStorage first
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) return storedTheme;

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme class
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(theme);

    // Store in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}
