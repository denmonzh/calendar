import {
  createSelector,
} from 'reselect';
import {
  monthDays,
  weekDays,
} from 'web-utils';

const selectedDate = state => state.dateReducer.selectedDate;
const currentMonth = state => state.dateReducer.currentMonth;

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
    currentMonth,
    selectedDate,
  ],
  (month, selected) => ({
    days: monthDays(month, selected),
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
