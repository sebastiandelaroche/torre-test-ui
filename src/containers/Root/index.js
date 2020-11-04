import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Radio } from 'antd';

const SearchPeople = lazy(() => import('../SearchPeople'));
const SearchOpportunities = lazy(() => import('../SearchOpportunities'));
const PersonBio = lazy(() => import('../PersonBio'));
const OpportunityDetail = lazy(() => import('../OpportunityDetail'));

const Root = () => {
  const history = useHistory();
  const onClickHandle = (event) => history.push(`/${event.target.value}`);

  return (
    <>
      <div style={{ padding: '2em' }}>
        <Radio.Group size='large' onChange={onClickHandle}>
          <Radio.Button value="search-people">Search People</Radio.Button>
          <Radio.Button value="search-opportunities">Search Opportunities</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ padding: '0 2em 0 2em' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/search-people' exact component={SearchPeople} />
          <Route path='/search-opportunities' exact component={SearchOpportunities} />
          <Route path='/person/:username' exact component={PersonBio} />
          <Route path='/opportunities/:id' exact component={OpportunityDetail} />
          <Redirect to='/search-people' />
        </Suspense>
      </div>
    </>
  );
}

export default Root;
