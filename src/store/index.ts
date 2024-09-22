import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addNoteSlice from "./slices/addNote";
import notesSlice from "./slices/notes";
import curPageSlice from "./slices/curPage";
import {
  ADDNOTE_KEY,
  CURPAGE_KEY,
  loadState,
  NOTES_KEY,
} from "@store/browser-storage";
import { initialData, Pages } from "@constants";

const rootReducer = combineReducers({
  curPage: curPageSlice,
  addNote: addNoteSlice,
  notes: notesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    addNote: {
      data: loadState(ADDNOTE_KEY) || initialData,
    },
    notes: {
      list: loadState(NOTES_KEY) || [],
    },
    curPage: {
      page: loadState(CURPAGE_KEY, "string") || Pages.main,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
