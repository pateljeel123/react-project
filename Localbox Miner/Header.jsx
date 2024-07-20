
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header>
      <h1>React Vite Theme Toggle App</h1>
    </header>
  );
};

export default Header;
