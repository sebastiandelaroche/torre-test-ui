import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Search from '../../components/Search';
import List from '../../components/List';
import { searchPeople } from "../../store/people/thunks";
import { selectPeopleSearched, selectPeopleIsLoading } from "../../store/people/selectors";
import { transformPeopleToAcceptableListStructure } from "../../utils/transforms/people";

const SearchPeople = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleSearched);
  const isLoading = useSelector(selectPeopleIsLoading);

  const onSearch = (value) => {
    dispatch(searchPeople(value));
  };

  const onRowClickHandle = ({ username }) => {
    history.push(`/person/${username}`);
  };

  const content = isLoading ?
    <div>Loading ...</div> :
    <List
      data={transformPeopleToAcceptableListStructure(people)}
      onClick={onRowClickHandle}
    />;

  return (
    <>
      <Search
        placeholder='Search People By Role'
        onSearch={onSearch}
        loading={isLoading}
      />
      {content}
    </>
  )
};

export default SearchPeople;
