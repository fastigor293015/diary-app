import { useRef, useState } from "react";

const useTransition = (onCloseCallback?: () => void, delay: number = 200) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onOpen = () => {
    setIsOpen(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true));
  };

  const onClose = () => {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      onCloseCallback?.();
    }, delay);
  };

  return {
    isOpen,
    isVisible,
    onOpen,
    onClose,
  };
};

export default useTransition;
