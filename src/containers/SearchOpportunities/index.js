import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../components/Search';
import List from '../../components/List';
import { searchOpportunities } from "../../store/opportunities/thunks";
import { selectOpportunitiesSearched, selectOpportunitiesIsLoading } from "../../store/opportunities/selectors";
import { transformOpportunitiesToAcceptableListStructure } from "../../utils/transforms/opportunities";

const SearchOpportunities = () => {
  const dispatch = useDispatch();
  const opportunities = useSelector(selectOpportunitiesSearched);
  const isLoading = useSelector(selectOpportunitiesIsLoading);

  const onSearch = (value) => {
    dispatch(searchOpportunities(value));
  };

  const content = isLoading ?
    <div>Loading ...</div> :
    <List data={transformOpportunitiesToAcceptableListStructure(opportunities)} />;

  return (
    <>
      <Search
        placeholder='Search Opportunities By Role'
        onSearch={onSearch}
        loading={isLoading}
      />
      {content}
    </>
  )
};

export default SearchOpportunities;
