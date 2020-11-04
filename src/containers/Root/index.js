import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

const SearchPeople = lazy(() => import('../SearchPeople'));
const SearchOpportunities = lazy(() => import('../SearchOpportunities'));
const PersonBio = lazy(() => import('../PersonBio'));

const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route path='/search-people' exact component={SearchPeople} />
    <Route path='/search-opportunities' exact component={SearchOpportunities} />
    <Route path='/person/:username' exact component={PersonBio} />
    <Redirect to='/search-people' />
  </Suspense>
);

export default Root;
