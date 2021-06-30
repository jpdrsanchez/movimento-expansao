import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);

  return (
    <ModalContext.Provider value={{ open, setOpen, content, setContent }}>
      {children}
    </ModalContext.Provider>
  );
};
