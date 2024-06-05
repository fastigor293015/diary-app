import { useCallback, useEffect, useState } from "react";
import Input from "@components/UI/Input";
import tagsData from "@data/tags.json";
import styles from "./TagSelector.module.css";
import clsx from "@utils/clsx";
import useOutsideClickObserver from "@hooks/useOutsideClickObserver";
import CleanTextIcon from "@components/UI/icons/CloseIcon";

interface TagSelectorProps extends React.HTMLAttributes<HTMLElement> {
  selectedTags: string[];
  onTagsChange: (value: string[]) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  onTagsChange,
  className,
  ...otherProps
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const promptsList = tagsData.filter((tag) => !selectedTags.find((selectedTag) => selectedTag === tag) && tag.toLowerCase().includes(inputValue.toLowerCase()));

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpened(true);
    setSelectedIndex(null);
    setInputValue(e.target.value);
  }

  const onTagAdd = useCallback((tag: string) => {
    if (!isOpened) return;
    onTagsChange([tag, ...selectedTags]);
    setIsOpened(false);
    setSelectedIndex(null);
  }, [isOpened, selectedTags, onTagsChange]);

  const onTagRemove = (tag: string) => {
    onTagsChange(selectedTags.filter((item) => item !== tag));
  }

  const onDropdownClose = () => {
    setIsOpened(false);
    setSelectedIndex(null);
  }

  const ref = useOutsideClickObserver<HTMLDivElement>(onDropdownClose);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (!isOpened) return;
      switch (e.key) {
        case "ArrowUp":
          setSelectedIndex(prev => !prev ? promptsList.length - 1 : prev - 1);
          break;
        case "ArrowDown":
          setSelectedIndex(prev => prev === promptsList.length - 1 || prev === null ? 0 : prev + 1);
          break;
        case "Enter":
          if (selectedIndex !== null) {
            onTagAdd(promptsList[selectedIndex]);
          } else if (inputValue.length) {
            onTagAdd(inputValue);
          }
          break;
        default:
          break;
      }
    }

    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [isOpened, onTagAdd, promptsList, selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    document.querySelector(`.${styles.promptItem}:nth-child(${selectedIndex + 1})`)?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [selectedIndex]);

  return (
    <div ref={ref} className={clsx(styles.tagSelector, className)} {...otherProps}>
      <Input
        className={styles.input}
        type="text"
        placeholder="#теги"
        value={inputValue}
        onChange={onInput}
        onClick={() => setIsOpened(true)}
        onFocus={() => setIsOpened(true)}
        onClear={() => setInputValue("")}
      // onBlur={onDropdownClose}
      />
      {isOpened && promptsList.length > 0 && inputValue && <div className={styles.promptsDropdown}>
        <div className={styles.promptsWrapper}>
          <p className={clsx("descr", styles.promptsDescr)}>Нажми Enter для добавления тега</p>
          <ul className={clsx("list", styles.promptsList)}>
            {promptsList.map((prompt, index) => (
              <li key={prompt} className={styles.promptItem}>
                <button className={clsx("btn", styles.promptBtn, selectedIndex === index && styles.selected)} onClick={() => onTagAdd(prompt)}>
                  {prompt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>}
      {selectedTags.length > 0 && (
        <ul className={clsx("list", styles.selectedTagsList)}>
          {selectedTags.map((selectedTag) => (
            <li key={selectedTag} className={styles.selectedTagItem}>
              {selectedTag}
              <button className={clsx("btn", styles.removeTagBtn)} onClick={() => onTagRemove(selectedTag)}>
                <CleanTextIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TagSelector;