import { createAsyncThunk } from '@reduxjs/toolkit';
import * as R from 'ramda';
import http from '../../utils/http';

export const searchOpportunities = createAsyncThunk(
  'opportunities/search',
  (role) => {
    return http.get(`/opportunities/search?role=${role}`)
      .then(R.prop('data'));
  }
);

export const findOpportunityById = createAsyncThunk(
  'opportunities/find-by-id',
  (id) => {
    return http.get(`/opportunities/${id}`)
      .then(R.prop('data'));
  }
);

