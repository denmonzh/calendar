import {
  actionTypes,
} from 'web-actions';
import dateFns from 'date-fns';


const initialState = {
  modal: false,
  pending: true,
  newNote: true,
  noticed: [],
};


const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.SET_INITIALIZE_CALENDAR):
      return {
        ...state,
        selectedDate: action.currentDate,
        currentMonth: action.currentMonth,
        noticed: action.note,
      };
    case (actionTypes.SET_NEXT_MONTH):
      return {
        ...state,
        currentMonth: dateFns.addMonths(state.currentMonth, 1),
      };
    case (actionTypes.SET_PREV_MONTH):
      return {
        ...state,
        currentMonth: dateFns.subMonths(state.currentMonth, 1),
      };
    case (actionTypes.PENDING_APP):
      return {
        ...state,
        pending: !state.pending,
      };
    case (actionTypes.SET_SELECTED_DATE):
      return {
        ...state,
        selectedDate: action.payload,
      };
    case (actionTypes.SET_SELECTED_SEARCH_NOTICE):
      return {
        ...state,
        selectedDate: action.payload,
        currentMonth: dateFns.subMonths(action.payload, 0),
      };
    case (actionTypes.SET_MODAL_IS_OPEN):
      return {
        ...state,
        modal: !state.modal,
        newNote: true,
      };
    case (actionTypes.SET_ADD_NOTICED):
      return {
        ...state,
        modal: !state.modal,
        noticed: state.noticed.concat(action.data),
        newNote: true,
      };
    case (actionTypes.SET_EDIT_NOTICED):
      return {
        ...state,
        modal: !state.modal,
        newNote: false,
        edit: action.payload.id,
      };
    case (actionTypes.SET_SAVE_CHANGE_NOTICED):
      return {
        ...state,
        modal: !state.modal,
        noticed: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
