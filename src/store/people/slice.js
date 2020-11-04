import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { searchPeople, findPersonByUserName } from './thunks';

export const peopleAdapter = createEntityAdapter();

export default createSlice({
  name: 'people',
  initialState: {
    people: [],
    personSelected: null,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [searchPeople.pending]: (state, action) => {
      state.isLoading = true;
      return state;
    },
    [searchPeople.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.people = action.payload;
      return state;
    },
    [searchPeople.rejected]: (state, action) => {
      state.isLoading = false;
      return state;
    },
    [findPersonByUserName.pending]: (state, action) => {
      state.isLoading = true;
      return state;
    },
    [findPersonByUserName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.personSelected = action.payload;
      return state;
    },
    [findPersonByUserName.rejected]: (state, action) => {
      state.isLoading = false;
      return state;
    },
  }
});
