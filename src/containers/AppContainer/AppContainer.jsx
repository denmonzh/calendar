// @flow
import React, {
  Fragment,
  useEffect,
  useCallback,
} from 'react';
import {
  hot,
  setConfig,
  cold,
} from 'react-hot-loader';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import {
  GlobalStyle,
} from 'web-styled';
import {
  getCurrentDateMonth,
  getCurrentDaysRows,
  getWeeksDays,
  getEditNoticed,
} from 'web-selectors';
import {
  Header,
  Controller,
  Calendar,
  MainModal,
} from 'web-components';
import {
  initializeCalendar,
  nextMonth,
  prevMonth,
  selectedDate,
  modalIsOpen,
  addNoticed,
  editNoticed,
  saveChangeNotice,
  selectedNoticedSearch,
} from 'web-actions';

setConfig({
  pureSFC: true,
  logLevel: 'no-errors-please',
  onComponentCreate: type => (
    String(type).indexOf('useState') > 0
        || String(type).indexOf('useEffect') > 0
  ) && cold(type),
});


const App = () => {
  const dispatch = useDispatch();

  const mapState = useCallback(state => ({
    current: getCurrentDateMonth(state),
    pending: state.dateReducer.pending,
    modal: state.dateReducer.modal,
    newNote: state.dateReducer.newNote,
    noticed: state.dateReducer.noticed,
    ...getEditNoticed(state),
    ...getCurrentDaysRows(state),
    ...getWeeksDays(state),
  }));

  const state = useMappedState(mapState);

  const handleSelectSearchNotice = (date) => {
    dispatch(selectedNoticedSearch(date));
  };

  const handleSaveChangeNotice = (data) => {
    dispatch(saveChangeNotice(data));
  };

  const handleSelectedDate = (date) => {
    dispatch(selectedDate(date));
  };

  const handleAddNoticed = (noticed) => {
    dispatch(addNoticed(noticed));
  };

  const handleModalIsOpen = () => {
    dispatch(modalIsOpen());
  };

  const handleNextMonth = () => {
    dispatch(nextMonth());
  };

  const handlePrevMonth = () => (
    dispatch(prevMonth())
  );

  const handleEditNoticed = note => (
    dispatch(editNoticed(note))
  );

  useEffect(() => {
    dispatch(initializeCalendar());
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Header
        handleModalIsOpen={handleModalIsOpen}
        handleSelectSearchNotice={handleSelectSearchNotice}
        noticed={state.noticed}
      />
      <Controller
        current={state.current}
        pending={state.pending}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <Calendar
        editOpen={state.editOpen}
        edit={state.edit}
        days={state.days}
        week={state.week}
        current={state.current}
        handleSelectedDate={handleSelectedDate}
        handleEditNoticed={handleEditNoticed}
      />
      <MainModal
        newNote={state.newNote}
        isOpen={state.modal}
        current={state.current}
        edit={state.edit}
        onRequestClose={handleModalIsOpen}
        handleAddNoticed={handleAddNoticed}
        handleSaveChangeNotice={handleSaveChangeNotice}
      />
    </Fragment>
  );
};

export default hot(module)(App);
