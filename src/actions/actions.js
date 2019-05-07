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

export const modalIsOpen = () => ({
  type: actionTypes.MODAL_IS_OPEN,
});

export const selectedDate = payload => ({
  type: actionTypes.SELECTED_DATE,
  payload,
});


export const addNoticed = payload => ({
  type: actionTypes.ADD_NOTICED,
  payload,
});

export const editNoticed = payload => ({
  type: actionTypes.EDIT_NOTICED,
  payload,
});

export const saveChangeNotice = payload => ({
  type: actionTypes.SAVE_CHANGE_NOTICED,
  payload,
});
