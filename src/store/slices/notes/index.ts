import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NOTES_KEY, saveState } from "@store/browser-storage";
import { FormValues, NoteData } from "@types";
import { generateRandomString } from "@utils";

export interface NotesState {
  list: NoteData[];
}

const initialState: NotesState = {
  list: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<FormValues>) => {
      const updatedList: NoteData[] = [
        {
          ...action.payload,
          id: generateRandomString(),
        },
        ...state.list,
      ];
      state.list = updatedList;
      saveState(NOTES_KEY, updatedList);
    },
  },
});

export const { create } = notesSlice.actions;
export default notesSlice.reducer;
