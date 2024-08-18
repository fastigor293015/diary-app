import { AddNoteContext } from "@providers";
import { useContext } from "react";

const useAddNote = () => useContext(AddNoteContext);

export default useAddNote;
