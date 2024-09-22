import { useImagesModal } from "@hooks";
import { Modal } from "@components/UI";
import ImagesSearch from "@components/ImagesModal/ImagesSearch";
import styles from "./ImagesModal.module.css";

interface ImagesModalProps extends React.HTMLAttributes<HTMLElement> {}

const ImagesModal: React.FC<ImagesModalProps> = () => {
  const { isOpen, isVisible, onClose } = useImagesModal();

  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      isVisible={isVisible}
      onClose={onClose}
    >
      <ImagesSearch />
    </Modal>
  );
};

export default ImagesModal;
