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
}

const Calendar = ({
  days,
  week,
}: Props) => (
  <CalendarContainer>
    <Days
      week={week}
    />
    <MonthDays
      days={days}
    />
  </CalendarContainer>
);


export default Calendar;
