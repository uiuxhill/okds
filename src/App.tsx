import { useState, useEffect } from 'react';
import { SellerOrderListScreen } from './screens/SellerOrderList';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {/* Theme Toggle (fixed top-right for testing) */}
      <button
        onClick={toggleTheme}
        className="
          fixed top-4 right-4 z-50
          px-4 py-2 rounded-lg
          bg-bg-primary hover:bg-bg-primary-hover active:bg-bg-primary-press
          text-content-on-action text-action-medium
          transition-colors shadow-lg
        "
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Seller Order List Screen - Pixel-perfect from Figma */}
      <SellerOrderListScreen />
    </>
  );
}

export default App;

