import { useEffect, useState } from 'react';
import { usePresence } from 'framer-motion';

// TODO: add types/typescript support

// TODO: set up storybook testing (per the tutorial below)

// TODO: figure out how to make `useAnimateLifecycle` a default export

// TODO: write README

// TODO: generally follow this tutorial to ultimately publish this package:
//       https://www.codifytools.com/blog/react-npm-package

export const useAnimateLifecycle = (delay) => {
  const duration = delay ? delay : 0;

  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (!isPresent && safeToRemove) {
      setTimeout(safeToRemove, duration);
    }
  }, [isPresent, safeToRemove, duration]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), duration);
  }, [duration]);

  return isVisible && isPresent;
};
