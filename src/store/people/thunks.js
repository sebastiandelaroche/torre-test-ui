import { createAsyncThunk } from '@reduxjs/toolkit';
import * as R from 'ramda';
import http from '../../utils/http';

export const searchPeople = createAsyncThunk(
  'people/search',
  (role) => {
    return http.get(`/people/search?role=${role}`)
      .then(R.prop('data'));
  }
);
