import {
  actionTypes,
} from 'web-actions';
import dateFns from 'date-fns';


const initialState = {
  modal: false,
  pending: true,
};


const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.SET_INITIALIZE_CALENDAR):
      return {
        ...state,
        selectedDate: action.currentDate,
        currentMonth: action.currentMonth,
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
    default:
      return state;
  }
};

export default dateReducer;
