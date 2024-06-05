import clsx from "@utils/clsx";
import styles from "./Image.module.css";
import ImageIcon from "@components/UI/icons/ImageIcon";

interface ImageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc: string | null;
}

const Image: React.FC<ImageProps> = ({
  imgSrc,
  className,
  ...otherProps
}) => {
  return (
    <button className={clsx("btn", styles.btn, className)} {...otherProps}>
      {imgSrc ? (
        <img src={imgSrc} alt="Картинка" />
      ) : (
        <ImageIcon />
      )}
    </button>
  );
}

export default Image;