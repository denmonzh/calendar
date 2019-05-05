// @flow
import React from 'react';
import {
  Day,
  DaysContainer,
} from './styled';


type Props = {
    week: Array,
}


const Days = ({ week }: Props) => (
  <DaysContainer>
    {
          week.map(item => (
            <Day
              key={item.id}
            >
              {item.weekDay}
            </Day>
          ))
      }
  </DaysContainer>
);

export default Days;
