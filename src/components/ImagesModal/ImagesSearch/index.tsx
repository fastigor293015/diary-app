import { useMemo, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useDebounce,
  useFetch,
  useImagesModal,
  useScroll,
} from "@hooks";
import { ImagesList, Input, Loader } from "@components/UI";
import Empty from "@components/ImagesModal/Empty";
import { onChange } from "@store/slices/addNote";
import { SplineApiResponse } from "@types";
import { clsx } from "@utils";
import styles from "./ImagesSearch.module.css";

const ImagesSearch = () => {
  const data = useAppSelector((state) => state.addNote.data);
  const dispatch = useAppDispatch();
  const { onClose: onModalClose } = useImagesModal();
  const { isReached, containerRef } = useScroll(20);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const url = debouncedQuery
    ? `https://api.unsplash.com/search/photos?per_page=10&query=${debouncedQuery}`
    : `https://api.unsplash.com/photos/random?count=10`;
  const { data: imagesList, loading } = useFetch<SplineApiResponse>(url, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
  });

  const formattedImagesList = useMemo(() => {
    if (!imagesList) {
      return [];
    } else {
      const array = "results" in imagesList ? imagesList.results : imagesList;
      return array.map((item) => item.urls.regular);
    }
  }, [imagesList]);

  return (
    <>
      <header
        className={clsx(styles.modalHeader, isReached && styles.withShadow)}
      >
        <Input
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery("")}
          autoFocus
        />
      </header>
      <main className={styles.modalMain} ref={containerRef}>
        {loading ? (
          <Loader />
        ) : !formattedImagesList.length ? (
          <Empty />
        ) : (
          <ImagesList
            data={formattedImagesList}
            className={styles.imagesList}
            selected={data.image}
            onSelect={(image: string) => {
              dispatch(onChange({ image }));
              onModalClose();
            }}
          />
        )}
      </main>
    </>
  );
};

export default ImagesSearch;
