import {
  createSelector,
} from 'reselect';
import {
  monthDays,
  weekDays,
  getNoticed,
} from 'web-utils';

export const selectedDate = state => state.dateReducer.selectedDate;
export const currentMonth = state => state.dateReducer.currentMonth;
export const noticed = state => state.dateReducer.noticed;
export const editNoticed = state => state.dateReducer.edit;

export const getCurrentDateMonth = createSelector(
  [
    selectedDate,
    currentMonth,
  ],
  (date, month) => (date && month ? ({
    selectedDate: date,
    currentMonth: month,
  }) : {}),
);


export const getCurrentDaysRows = createSelector(
  [
    noticed,
    currentMonth,
    selectedDate,
  ],
  (note, month, selected) => ({
    days: monthDays(month, selected, note),
  }),
);

export const getWeeksDays = createSelector(
  [
    currentMonth,
  ],
  month => ({
    week: weekDays(month),
  }),
);

export const getEditNoticed = createSelector(
  [
    selectedDate,
    noticed,
    editNoticed,
  ],
  (selected, note, id) => ({
    edit: getNoticed(note, id),
  }),
);
