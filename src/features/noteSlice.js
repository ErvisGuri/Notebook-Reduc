import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notelist",
  initialState: {
    noteLists: [],
  },
  reducers: {
    addNote: (state, action) => {
      const payload = action.payload;
      state.noteLists = [
        ...state.noteLists,
        {
          name: payload.name,
          category: payload.categorys,
          date: payload.date,
          textArea: payload.textArea,
          id: Math.random() * 1000,
        },
      ];
    },
    remove: (state, action) => {
      // here the payload is the id of the notebook we want to delete
      state.noteLists = state.noteLists.filter((el) => {
        return el.id !== action.payload;
      });
    },
    updateNote: (state, action) => {
      const index = state.noteLists.findIndex(
        (nt) => nt.id === action.payload.id
      );
      console.log(action.payload);
      state.noteLists[index].date = action.payload.date;
      state.noteLists[index].name = action.payload.name;
      state.noteLists[index].category = action.payload.categorys;
      state.noteLists[index].textArea = action.payload.textArea;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, remove, updateNote } = noteSlice.actions;

export default noteSlice.reducer;

export const selectNotes = (state) => state.notelist.noteLists;
