// @flow
import React from 'react';
import {
  Days,
  MonthDays,
} from 'web-components';
import {
  CalendarContainer,
} from './styled';


type Props = {
    days: Array,
    week: Array,
    current: object,
    handleSelectedDate: {():void},
    handleEditNoticed: {():void},
}

const Calendar = ({
  days,
  week,
  current,
  handleSelectedDate,
  handleEditNoticed,
}: Props) => (
  <CalendarContainer>
    <Days
      week={week}
    />
    <MonthDays
      current={current}
      days={days}
      handleSelectedDate={handleSelectedDate}
      handleEditNoticed={handleEditNoticed}
    />
  </CalendarContainer>
);


export default Calendar;
