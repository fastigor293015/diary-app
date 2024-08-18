import { useMemo, useState } from "react";
import { useAddNote, useScroll, useFetch, useDebounce } from "@hooks";
import { ImagesList, Input, Loader, Modal } from "@components/UI";
import { clsx } from "@utils";
import styles from "./ImagesModal.module.css";
import type { SplineApiResponse } from "@types";
import Empty from "@components/ImagesModal/Empty";

interface ImagesModalProps extends React.HTMLAttributes<HTMLElement> {}

const ImagesModal: React.FC<ImagesModalProps> = () => {
  const { data, onChange, isModalOpen, isModalVisible, onModalClose } =
    useAddNote();
  const { isReached, containerRef } = useScroll(20);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const {
    data: imagesList,
    loading,
    error,
  } = useFetch<SplineApiResponse>(
    `https://api.unsplash.com${debouncedQuery && "/search"}/photos?per_page=10${
      debouncedQuery ? `&query=${debouncedQuery}` : ""
    }`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const formattedImagesList = useMemo(() => {
    if (!imagesList) {
      return [];
    } else {
      const array = "results" in imagesList ? imagesList.results : imagesList;
      return array.map((item) => item.urls.regular);
    }
  }, [imagesList]);

  return (
    <Modal
      className={styles.modal}
      isOpen={isModalOpen}
      isVisible={isModalVisible}
      onClose={onModalClose}
    >
      <header
        className={clsx(styles.modalHeader, isReached && styles.withShadow)}
      >
        <Input
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
              onChange({ image });
              onModalClose();
            }}
          />
        )}
      </main>
    </Modal>
  );
};

export default ImagesModal;
