import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const useModal = () => {
  const { open, setOpen, content, setContent } = useContext(ModalContext);

  return { open, setOpen, content, setContent };
};

export default useModal;
