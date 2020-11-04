import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { searchOpportunities, findOpportunityById } from './thunks';

export const peopleAdapter = createEntityAdapter();

export default createSlice({
  name: 'opportunities',
  initialState: {
    opportunities: [],
    opportunitySelected: null,
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
    [findOpportunityById.pending]: (state, action) => {
      state.isLoading = true;
      return state;
    },
    [findOpportunityById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.opportunitySelected = action.payload;
      return state;
    },
    [findOpportunityById.rejected]: (state, action) => {
      state.isLoading = false;
      return state;
    },
  }
});
