import { useState } from "react";
import useOutsideClickObserver from "@hooks/useOutsideClickObserver";
import EmojiIcon from "@components/UI/icons/EmojiIcon";
import ChevronDownIcon from "@components/UI/icons/ChevronDownIcon";
import CleanIcon from "@components/UI/icons/CleanIcon";
import Button from "@components/UI/Button";
import clsx from "@utils/clsx";
import { emojis } from "@constants";
import styles from "./Selector.module.css";

export type EmojiValue = (typeof emojis)[number] | null;

interface SelectorProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
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

  const ref = useOutsideClickObserver<HTMLDivElement>(() => setIsOpened(false));

  const onSelect = (value: EmojiValue) => {
    onChange(value);
    setIsOpened(false);
  }

  return (
    <div ref={ref} className={clsx(styles.selector, isOpened && styles.opened, className)} {...otherProps}>
      <button type="button" className={clsx("btn", styles.toggleBtn)} onClick={() => setIsOpened(prev => !prev)}>
        {value || <EmojiIcon />}
        <ChevronDownIcon className={styles.chevronIcon} />
      </button>
      <div className={clsx(styles.dropdownMenu)}>
        <ul className={clsx("list", styles.emojiList)}>
          {emojis.map((item) => (
            <li key={item} className={styles.emojiItem}>
              <button type="button" className={clsx("btn", styles.emojiBtn, item === value && styles.selected)} onClick={() => onSelect(item)}>
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
    </div>
  );
}

export default Selector;