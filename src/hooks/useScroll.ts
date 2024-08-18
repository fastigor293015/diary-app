import { useEffect, useRef, useState } from "react";

const useScroll = (scrollValue: number) => {
  const [isReached, setIsReached] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollHandler = () => {
      setIsReached((containerRef.current?.scrollTop || 0) >= scrollValue);
    };

    container?.addEventListener("scroll", scrollHandler);
    return () => container?.removeEventListener("scroll", scrollHandler);
  }, [scrollValue, containerRef.current]);

  return {
    isReached,
    containerRef,
  };
};

export default useScroll;
