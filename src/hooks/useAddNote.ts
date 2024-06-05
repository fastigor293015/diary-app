import { AddNoteContext } from "@providers/AddNote";
import { useContext } from "react";

const useAddNote = () => useContext(AddNoteContext);

export default useAddNote;