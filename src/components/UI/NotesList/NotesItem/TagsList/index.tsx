import { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "@utils";
import styles from "./TagsList.module.css";

interface TagsListProps extends React.HTMLAttributes<HTMLUListElement> {
  data: string[];
}

const TagsList: React.FC<TagsListProps> = ({ data, ...otherProps }) => {
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const [itemsSizes, setItemsSizes] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    wrapperRef.current?.childNodes.forEach((item, index) => {
      if (item instanceof HTMLElement) {
        setItemsSizes((prev) => ({
          ...prev,
          [item.textContent || index]:
            index > 0 ? item.offsetWidth + 8 : item.offsetWidth,
        }));
      }
    });
  }, []);

  const wrapperWidth = wrapperRef.current?.offsetWidth || 0;

  const [_, unfittedItemsCount] = useMemo(
    () =>
      Object.keys(itemsSizes).reduce(
        (prev, key) => {
          const newTotalWidth = prev[0] + itemsSizes[key];
          return [
            newTotalWidth,
            newTotalWidth > wrapperWidth ? prev[1] + 1 : prev[1],
          ];
        },
        [0, 0]
      ),
    [itemsSizes, wrapperWidth]
  );

  return (
    <ul
      ref={wrapperRef}
      className={clsx("list", styles.tagsList)}
      {...otherProps}
    >
      {data.map(
        (tagItem, index) =>
          index < data.length - unfittedItemsCount && (
            <li key={tagItem} className={styles.tagsItem}>
              {tagItem}
            </li>
          )
      )}
      {!!unfittedItemsCount && (
        <li className={styles.tagsItem}>+{unfittedItemsCount}</li>
      )}
    </ul>
  );
};

export default TagsList;
