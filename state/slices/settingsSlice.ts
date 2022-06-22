import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SettingsType } from "./../../types/components/settings";

const initialState: SettingsType = {
  visible: false,
  theme: "dark",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.visible = !state.visible;
    },
    toggleTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleDrawer, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
