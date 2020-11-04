import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

const SearchPeople = lazy(() => import('../SearchPeople'));

const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route path='/search-people' exact component={SearchPeople} />
    <Redirect to='/search-people' />
  </Suspense>
);

export default Root;
