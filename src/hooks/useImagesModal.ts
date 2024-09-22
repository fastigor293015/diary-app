import { useContext } from "react";
import { ImagesModalContext } from "@providers";

const useImagesModal = () => useContext(ImagesModalContext);

export default useImagesModal;
