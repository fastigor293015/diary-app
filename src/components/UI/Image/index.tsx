import { forwardRef } from "react";
import { DeleteIcon, ImageIcon } from "@components/UI/icons";
import { clsx } from "@utils";
import styles from "./Image.module.css";

interface ImageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc: string | null;
  onImgDelete: () => void;
}

const Image = forwardRef<HTMLButtonElement, ImageProps>((props, ref) => {
  const { imgSrc, className, onImgDelete, ...otherProps } = props;

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImgDelete();
  };

  return (
    <button
      ref={ref}
      type="button"
      className={clsx("btn", styles.btn, imgSrc && styles.hasValue, className)}
      {...otherProps}
    >
      <img src={imgSrc || "/images/theme.jpg"} alt="Картинка" />
      {imgSrc ? (
        <>
          <div
            className={clsx("btn", styles.deleteBtn)}
            onClick={onDelete}
            tabIndex={0}
          >
            <DeleteIcon />
          </div>
        </>
      ) : (
        <ImageIcon className={styles.imageIcon} />
      )}
    </button>
  );
});

export default Image;
