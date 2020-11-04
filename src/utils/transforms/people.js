import * as R from 'ramda';

export const transformPersonToAcceptableListStructure = R.applySpec({
  username: R.prop('username'),
  title: R.prop('name'),
  description: R.prop('professionalHeadline'),
  avatar: R.prop('picture')
});

export const transformPeopleToAcceptableListStructure = R.map(transformPersonToAcceptableListStructure);
