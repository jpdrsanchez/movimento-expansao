import { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';

const useScroll = () => {
  const { position, setPosition } = useContext(ScrollContext);

  return { position, setPosition };
};

export default useScroll;
