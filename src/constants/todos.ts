export enum TodoFilter {
  ALL = 0,
  ACTIVE,
  COMPLETED
}

export const TODO_FILTER_TYPES = [
  TodoFilter.ALL,
  TodoFilter.ACTIVE,
  TodoFilter.COMPLETED
];

export const TODO_FILTER_TITLES = {
  [TodoFilter.ALL]: 'All',
  [TodoFilter.ACTIVE]: 'Active',
  [TodoFilter.COMPLETED]: 'Completed'
};
