import { useTransition } from "@hooks";
import { PropsWithChildren, RefObject, createContext, useRef } from "react";

interface IImagesModalContext {
  isOpen: boolean;
  isVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
  imageFieldRef: RefObject<HTMLButtonElement> | null;
}

export const ImagesModalContext = createContext<IImagesModalContext>({
  isOpen: false,
  isVisible: false,
  onOpen: () => {},
  onClose: () => {},
  imageFieldRef: null,
});

export const ImagesModalProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const imageFieldRef = useRef<HTMLButtonElement>(null);
  const { isOpen, isVisible, onOpen, onClose } = useTransition(() => {
    imageFieldRef.current?.focus();
  });

  return (
    <ImagesModalContext.Provider
      value={{
        isOpen,
        isVisible,
        onOpen,
        onClose,
        imageFieldRef,
      }}
    >
      {children}
    </ImagesModalContext.Provider>
  );
};
