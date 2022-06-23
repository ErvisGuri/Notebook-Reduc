import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'notelist',
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
            ]
        },
        remove: (state, action) => {
            // here the payload is the id of the notebook we want to delete
            state.noteLists = state.noteLists.filter((el) => {
                return el.id !== action.payload;
            });
        },
    }
})

// Action creators are generated for each case reducer function
export const { addNote, remove } = noteSlice.actions

export default noteSlice.reducer

export const selectNotes = (state) => state.notelist.noteLists;