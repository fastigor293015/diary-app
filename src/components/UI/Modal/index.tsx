import { createPortal } from "react-dom";
import CloseIcon from "@components/UI/icons/CloseIcon";
import clsx from "@utils/clsx";
import styles from "./Modal.module.css";
import { useEffect, useMemo } from "react";

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  isVisible?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  isVisible,
  onClose,
  className,
  children,
  ...otherProps
}) => {
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [isOpen]);

  const active = useMemo(() => isVisible === undefined ? isOpen : isVisible, [isOpen, isVisible]);

  const root = document.getElementById("modal-root");

  if (!root) return null;

  return createPortal(
    isOpen && (
      <div className={clsx(styles.bg, active && styles.active)} onClick={(e) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
      }}>
        <div className={clsx(styles.container, className)} {...otherProps}>
          {children}
        </div>
        <button className={clsx("btn", styles.closeBtn)} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    ),
    root
  );
}

export default Modal;