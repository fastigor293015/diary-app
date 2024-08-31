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
      className={clsx("btn", styles.btn, className)}
      {...otherProps}
    >
      {imgSrc ? (
        <>
          <img src={imgSrc} alt="Картинка" />
          <button className={clsx("btn", styles.deleteBtn)} onClick={onDelete}>
            <DeleteIcon />
          </button>
        </>
      ) : (
        <ImageIcon />
      )}
    </button>
  );
});

export default Image;
