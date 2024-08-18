import { useContext } from "react";
import { CurPageContext } from "@providers";

const useCurPage = () => useContext(CurPageContext);

export default useCurPage;
