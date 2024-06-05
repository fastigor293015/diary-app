import { useContext } from "react";
import { CurPageContext } from "@providers/CurPage";

const useCurPage = () => useContext(CurPageContext);

export default useCurPage;