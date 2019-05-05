// @flow
import React from 'react';
import {
  Flex,
  Text,
} from 'web-styled';
import {
  DayMonthItem,
  NumberText,
} from './styled';

type Props = {
    days: Array,
}


const MonthDays = ({ days }: Props) => (
  <Flex
    wrap="wrap"
    width="90%"
    justify="center"
  >
    {
        days.map(item => (
          <DayMonthItem
            key={item.id}
          >
            <NumberText
              selected={item.selected}
            >
              {item.dayNumber}
            </NumberText>
          </DayMonthItem>
        ))
      }
  </Flex>
);

export default MonthDays;
