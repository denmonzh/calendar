import {
  createSelector,
} from 'reselect';


const getItems = state => state.reducerItems.items;


export const getFilterItems = createSelector(
  [
    getItems,
  ],
  items => items.map(item => ({
    ...item,
  })),
);
