import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pages } from "@constants";
import { CURPAGE_KEY, saveState } from "@store/browser-storage";

export interface CurPageState {
  page: Pages;
}

const initialState: CurPageState = {
  page: Pages.main,
};

const curPageSlice = createSlice({
  name: "curPage",
  initialState,
  reducers: {
    redirect: (state, action: PayloadAction<Pages>) => {
      state.page = action.payload;
      saveState(CURPAGE_KEY, action.payload);
    },
  },
});

export const { redirect } = curPageSlice.actions;
export default curPageSlice.reducer;
