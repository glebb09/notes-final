import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

import { setNoteLocal, getAllNoteLocal } from '../../util/noteLocal';

const initialState = {
  notes: [],
  viewNote: '',
  viewId: '',
  statusDelete: false
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,

  reducers: {
    createNote: (state, action) => {

        const regExp = /#[0-9A-Za-zА-Яа-яё]+/gm;

        state.notes.push({
            id: uuidv4(),
            text: action.payload.replace(regExp, '').trim(),
            all_text: action.payload,
            date: new Date().toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'}),
            tags: action.payload.match(regExp),
            bookmark: false,
        });

        setNoteLocal(state.notes);
        
    },

    updateNote: (state, action) => {
      const allNotes = getAllNoteLocal();

      const regExp = /#[0-9A-Za-zА-Яа-яё]+/gm;

      if (allNotes) {
        const newAllNotes = allNotes;
        newAllNotes.forEach((note, id) => {
          if ( id == action.payload.viewId ) {
            note.text = action.payload.text.replace(regExp, '').trim();
            note.all_text = action.payload.text;
            note.date = new Date().toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'});
            note.tags = action.payload.text.match(regExp);
          }
        });
        setNoteLocal(newAllNotes);
        state.notes.push(newAllNotes);
      }
    },

    viewIdNote: (state, action) => {
      const allNotes = getAllNoteLocal();
      const viewNote = allNotes.filter((note, id) => id == action.payload);

      state.viewNote = viewNote;
      state.viewId = action.payload;
    },

    deleteNoteStatus: (state) => {
      state.statusDelete = state.statusDelete == true ? false : true;
    },

    filterNotes: (state, action) => {
      
    },

  }
})

export const { createNote, updateNote, viewIdNote, deleteNoteStatus, filterNotes } = notesSlice.actions;

export default notesSlice.reducer;

