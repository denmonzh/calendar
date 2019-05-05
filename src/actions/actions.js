// @flow
import {
  actionTypes,
} from 'web-actions';

export const pendingApp = {
  type: actionTypes.PENDING_APP,
};

export const initializeCalendar = () => ({
  type: actionTypes.INITIALIZE_CALENDAR,
});

export const nextMonth = () => ({
  type: actionTypes.NEXT_MONTH,
});

export const prevMonth = () => ({
  type: actionTypes.PREV_MONTH,
});
