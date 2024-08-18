import { forwardRef } from "react";
import { ImageIcon } from "@components/UI/icons";
import { clsx } from "@utils";
import styles from "./Image.module.css";

interface ImageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.LegacyRef<HTMLButtonElement>;
  imgSrc: string | null;
}

const Image = forwardRef<HTMLButtonElement, ImageProps>((props, ref) => {
  const { imgSrc, className, ...otherProps } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx("btn", styles.btn, className)}
      {...otherProps}
    >
      {imgSrc ? <img src={imgSrc} alt="Картинка" /> : <ImageIcon />}
    </button>
  );
});

export default Image;
