import { useOutsideClickObserver, useTransition } from "@hooks";
import { Button } from "@components/UI";
import { ChevronDownIcon, CleanIcon, EmojiIcon } from "@components/UI/icons";
import { clsx } from "@utils";
import { emojis } from "@constants";
import { EmojiValue } from "@types";
import styles from "./Selector.module.css";

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
  const { isOpen, isVisible, onOpen, onClose } = useTransition();
  const ref = useOutsideClickObserver<HTMLDivElement>(() => onClose());

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
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {value || <EmojiIcon />}
        <ChevronDownIcon className={styles.chevronIcon} />
      </button>
      {isOpen && (
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
            className={clsx(styles.removeBtn, !value && styles.notSelected)}
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
