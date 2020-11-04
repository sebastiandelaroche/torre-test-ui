import * as R from 'ramda';

export const transformOpportunityToAcceptableListStructure = R.applySpec({
  title: R.prop('objective'),
  description: R.prop('objective')
});

export const transformOpportunitiesToAcceptableListStructure = R.map(transformOpportunityToAcceptableListStructure);
