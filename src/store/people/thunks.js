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

export const findPersonByUserName = createAsyncThunk(
  'people/find-person-by-username',
  (username) => {
    return http.get(`/people/${username}/bio`)
      .then(R.prop('data'));
  }
);

