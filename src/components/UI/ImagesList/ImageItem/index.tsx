import { clsx } from "@utils";
import styles from "./ImageItem.module.css";
import { ImageIcon } from "@components/UI/icons";
import { useState } from "react";

interface ImageItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  src: string;
  isSelected: boolean;
  onSelect: (src: string) => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, isSelected, onSelect }) => {
  const [isVertical, setIsVertical] = useState(false);

  return (
    <li
      key={src}
      className={clsx(styles.item, isVertical && styles.isVertical)}
    >
      <button
        className={clsx("btn", styles.itemBtn, isSelected && styles.isSelected)}
        onClick={() => onSelect(src)}
      >
        <img
          src={src}
          className={styles.itemImg}
          alt="Картинка"
          onLoad={(e) => {
            if (e.currentTarget.naturalHeight > e.currentTarget.naturalWidth) {
              setIsVertical(true);
            }
          }}
        />
        {isSelected && (
          <div className={styles.activeBtnBg}>
            <ImageIcon />
          </div>
        )}
      </button>
    </li>
  );
};

export default ImageItem;
