import clsx from "@utils/clsx";
import styles from "./ImagesList.module.css";
import ImageIcon from "@components/UI/icons/ImageIcon";

interface ImagesListProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  selected: string | null;
  onSelect: (img: string) => void;
}

const ImagesList: React.FC<ImagesListProps> = ({
  selected,
  onSelect,
  className,
  ...otherProps
}) => {
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
    "/images/img6.jpeg",
  ];

  return (
    <ul className={clsx("list", styles.list, className)} {...otherProps}>
      {images.map((src) => (
        <li key={src} className={styles.item}>
          <button className={clsx("btn", styles.itemBtn, selected === src && styles.selected)} onClick={() => onSelect(src)}>
            <img src={src} className={styles.itemImg} alt="Картинка" />
            {selected === src && (
              <div className={styles.activeBtnBg}>
                <ImageIcon />
              </div>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ImagesList;