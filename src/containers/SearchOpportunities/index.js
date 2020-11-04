import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Search from '../../components/Search';
import List from '../../components/List';
import { searchOpportunities } from "../../store/opportunities/thunks";
import { selectOpportunitiesSearched, selectOpportunitiesIsLoading } from "../../store/opportunities/selectors";
import { transformOpportunitiesToAcceptableListStructure } from "../../utils/transforms/opportunities";

const SearchOpportunities = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const opportunities = useSelector(selectOpportunitiesSearched);
  const isLoading = useSelector(selectOpportunitiesIsLoading);

  const onSearch = (value) => {
    dispatch(searchOpportunities(value));
  };

  const onRowClickHandle = ({ id }) => {
    history.push(`/opportunities/${id}`);
  };

  const content = isLoading ?
    <div>Loading ...</div> :
    <List
      data={transformOpportunitiesToAcceptableListStructure(opportunities)}
      onClick={onRowClickHandle}
    />;

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
