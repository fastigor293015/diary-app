import { useRef, useState } from "react";
import { useOutsideClickObserver } from "@hooks";
import { Button } from "@components/UI";
import { ChevronDownIcon, CleanIcon, EmojiIcon } from "@components/UI/icons";
import { clsx } from "@utils";
import { emojis } from "@constants";
import styles from "./Selector.module.css";

export type EmojiValue = (typeof emojis)[number] | null;

interface SelectorProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  value: EmojiValue;
  onChange: (newValue: EmojiValue) => void;
}

const Selector: React.FC<SelectorProps> = ({
  className,
  value,
  onChange,
  ...otherProps
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ref = useOutsideClickObserver<HTMLDivElement>(() => onClose());

  const onOpen = () => {
    setIsOpened(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true));
  };

  const onClose = () => {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpened(false), 200);
  };

  const onSelect = (value: EmojiValue) => {
    onChange(value);
    onClose();
  };

  return (
    <div
      ref={ref}
      className={clsx(styles.selector, isVisible && styles.opened, className)}
      {...otherProps}
    >
      <button
        type="button"
        className={clsx("btn", styles.toggleBtn)}
        onClick={() => (isOpened ? onClose() : onOpen())}
      >
        {value || <EmojiIcon />}
        <ChevronDownIcon className={styles.chevronIcon} />
      </button>
      {isOpened && (
        <div className={clsx(styles.dropdownMenu)}>
          <ul className={clsx("list", styles.emojiList)}>
            {emojis.map((item) => (
              <li key={item} className={styles.emojiItem}>
                <button
                  type="button"
                  className={clsx(
                    "btn",
                    styles.emojiBtn,
                    item === value && styles.selected
                  )}
                  onClick={() => onSelect(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            btnType="default"
            className={styles.removeBtn}
            icon={CleanIcon}
            text="Убрать эмоцию"
            onClick={() => onSelect(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Selector;
