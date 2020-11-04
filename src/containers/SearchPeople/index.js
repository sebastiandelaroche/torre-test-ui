import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../components/Search';
import List from '../../components/List';
import { searchPeople } from "../../store/people/thunks";
import { selectPeopleSearched, selectPeopleIsLoading } from "../../store/people/selectors";
import { transformPeopleToAcceptableListStructure } from "../../utils/transforms/people";

const SearchPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleSearched);
  const isLoading = useSelector(selectPeopleIsLoading);

  const onSearch = (value) => {
    dispatch(searchPeople(value));
  };

  const content = isLoading ?
    <div>Loading ...</div> :
    <List data={transformPeopleToAcceptableListStructure(people)} />;

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
