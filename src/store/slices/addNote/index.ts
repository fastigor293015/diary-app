import { initialData } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ADDNOTE_KEY, clearState, saveState } from "@store/browser-storage";
import { FormValues } from "@types";

export interface AddNoteState {
  data: FormValues;
}

const initialState: AddNoteState = {
  data: initialData,
};

const addNoteSlice = createSlice({
  name: "addNote",
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<Partial<FormValues>>) => {
      const updatedData = {
        ...state.data,
        ...action.payload,
      };
      state.data = updatedData;
      saveState(ADDNOTE_KEY, updatedData);
    },
    reset: (state) => {
      state.data = initialData;
      clearState(ADDNOTE_KEY);
    },
  },
});

export const { onChange, reset } = addNoteSlice.actions;
export default addNoteSlice.reducer;
