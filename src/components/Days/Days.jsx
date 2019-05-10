// @flow
import React from 'react';
import {
  Text,
} from 'web-styled';
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
              <Text
                size="18px"
              >
                {item.weekDay}
              </Text>
            </Day>
          ))
      }
  </DaysContainer>
);

export default Days;
