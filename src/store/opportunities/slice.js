import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { searchOpportunities } from './thunks';

export const peopleAdapter = createEntityAdapter();

export default createSlice({
  name: 'opportunities',
  initialState: {
    opportunities: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [searchOpportunities.pending]: (state, action) => {
      state.isLoading = true;
      return state;
    },
    [searchOpportunities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.opportunities = action.payload;
      return state;
    },
    [searchOpportunities.rejected]: (state, action) => {
      state.isLoading = false;
      return state;
    },
  }
});
