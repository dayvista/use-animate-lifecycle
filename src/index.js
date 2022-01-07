import { useEffect, useState } from 'react'
import { usePresence } from 'framer-motion'

// TODO: add types/typescript support

// TODO: figure out how to make `useAnimateLifecycle` a default export

// TODO: write README

// TODO: generally follow this tutorial to ultimately publish this package:
//       https://www.codifytools.com/blog/react-npm-package

export const useAnimateLifecycle = (delay = 500) => {
  // beginning of lifecycle
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setTimeout(() => setIsVisible(true), delay), [])

  // end of lifecycle
  const [isPresent, safeToRemove] = usePresence()
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, delay)
  }, [isPresent, safeToRemove])

  return isVisible && isPresent
}
