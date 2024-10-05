import { createContext } from 'react';

interface DefaultContextValues {
  darkMode: boolean;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

export const DarkModeContext = createContext<DefaultContextValues>({
  darkMode: true,
  toggleTheme: () => {},
  theme: 'light'
});
