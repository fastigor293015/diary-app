import ImagesList from "@components/UI/ImagesList";
import Input from "@components/UI/Input";
import Modal from "@components/UI/Modal";
import useAddNote from "@hooks/useAddNote";
import styles from "./ImagesModal.module.css";

const ImagesModal = () => {
  const { data, onChange, isModalOpen, isModalVisible, onModalClose } = useAddNote();

  return (
    <Modal isOpen={isModalOpen} isVisible={isModalVisible} onClose={onModalClose}>
      <Input placeholder="Поиск" autoFocus />
      <ImagesList className={styles.imagesList} selected={data.image} onSelect={(image: string) => {
        onChange({ image });
        onModalClose();
      }} />
    </Modal>
  );
}

export default ImagesModal;