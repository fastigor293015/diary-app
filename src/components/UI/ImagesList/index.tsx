import { ImageItem } from "@components/UI";
import { clsx } from "@utils";
import styles from "./ImagesList.module.css";

interface ImagesListProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  data: string[];
  selected: string | null;
  onSelect: (img: string) => void;
}

const ImagesList: React.FC<ImagesListProps> = ({
  data,
  selected,
  onSelect,
  className,
  ...otherProps
}) => {
  return (
    <ul className={clsx("list", styles.list, className)} {...otherProps}>
      {data.map((src) => (
        <ImageItem
          key={src}
          src={src}
          isSelected={src === selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default ImagesList;
