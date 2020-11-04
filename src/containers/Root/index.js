import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

const SearchPeople = lazy(() => import('../SearchPeople'));
const SearchOpportunities = lazy(() => import('../SearchOpportunities'));

const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route path='/search-people' exact component={SearchPeople} />
    <Route path='/search-opportunities' exact component={SearchOpportunities} />
    <Redirect to='/search-opportunities' />
  </Suspense>
);

export default Root;
