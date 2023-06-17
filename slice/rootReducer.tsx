import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  array: Data[];
}

interface Data {
  name: string;
}
const initialState: RootState = {
  array: [],
};
const rootReducerSlice = createSlice({
  name: "rootReducer",
  initialState,
  reducers: {
    addToArray: (state: { array: any[] }, action: PayloadAction<Data>) => {
      state.array.push(action.payload);
    },
    deleteFromArray: (state, action: PayloadAction<string>) => {
      state.array = state.array.filter((item) => item.name !== action.payload);
    },
  },
});
export const { addToArray, deleteFromArray } = rootReducerSlice.actions;

export default rootReducerSlice.reducer;
