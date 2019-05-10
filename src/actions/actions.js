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

export const selectedDate = (payload: Date) => ({
  type: actionTypes.SELECTED_DATE,
  payload,
});


export const addNoticed = (payload: Object) => ({
  type: actionTypes.ADD_NOTICED,
  payload,
});

export const editNoticed = (payload: Object) => ({
  type: actionTypes.EDIT_NOTICED,
  payload,
});

export const saveChangeNotice = (payload: Object) => ({
  type: actionTypes.SAVE_CHANGE_NOTICED,
  payload,
});

export const selectedNoticedSearch = (payload: Object) => ({
  type: actionTypes.SELECTED_SEARCH_NOTICE,
  payload,
});
