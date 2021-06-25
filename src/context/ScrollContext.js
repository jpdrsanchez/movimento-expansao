import { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      setPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ position, setPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
