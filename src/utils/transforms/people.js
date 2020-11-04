import * as R from 'ramda';

export const transformPersonToAcceptableListStructure = R.applySpec({
  title: R.prop('name'),
  description: R.prop('professionalHeadline'),
  avatar: R.prop('picture')
});

export const transformPeopleToAcceptableListStructure = R.map(transformPersonToAcceptableListStructure);
