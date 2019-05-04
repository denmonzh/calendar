import React from 'react';
import {
  Days,
} from 'web-utils/constants';
import {
  Flex,
  Text,
} from 'web-styled';
import {
  CalendarContainer,
  DaysContainer,
  Day,
} from './styled';


const Calendar = () => (
  <CalendarContainer>
    <DaysContainer>
      {
            Days.map(item => (
              <Day
                key={item.id}
              >
                <Text
                  size="12px"
                  align="center"
                  color="black"
                >
                  {item.name}
                </Text>
              </Day>
            ))
        }
    </DaysContainer>
  </CalendarContainer>
);


export default Calendar;
