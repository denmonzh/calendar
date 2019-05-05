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
}

const Calendar = ({
  days,
  week,
  current,
}: Props) => (
  <CalendarContainer>
    <Days
      week={week}
    />
    <MonthDays
      current={current}
      days={days}
    />
  </CalendarContainer>
);


export default Calendar;
