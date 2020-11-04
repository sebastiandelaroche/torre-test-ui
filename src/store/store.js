import { configureStore } from '@reduxjs/toolkit';

import peopleReducer from './people/reducers';
import opportunitiesReducer from './opportunities/reducers';

export default configureStore({
  reducer: {
    people: peopleReducer,
    opportunities: opportunitiesReducer,
  },
});
