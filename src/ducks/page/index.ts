import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";

export type Page = {
  currentPath: string;
};

const initialState: Page = {
  currentPath: "/",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pagePathChanger: (state, action: PayloadAction<string>) => ({
      ...state,
      currentPath: action.payload,
    }),
  },
});

export const { pagePathChanger } = pageSlice.actions;

export const store = configureStore({
  // 1つしかないからホントはこんな書き方する必要ないけど、一応勉強用に
  reducer: {
    pageReducer: pageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// 型情報付きのuseSelectorをここで宣言
// from https://future-architect.github.io/articles/20200501/
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
