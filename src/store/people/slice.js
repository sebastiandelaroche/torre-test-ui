import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { searchPeople } from './thunks';

console.log('searchPeople', searchPeople)

export const peopleAdapter = createEntityAdapter();

export default createSlice({
  name: 'people',
  initialState: {
    people: [],
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
  }
});
