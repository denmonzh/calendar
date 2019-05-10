// @flow
import React from 'react';
import {
  Flex,
  Text,
} from 'web-styled';
import {
  DayMonthItem,
  NumberText,
  EventContainer,
  EventItem,
} from './styled';

type Props = {
    days: Array,
    handleSelectedDate: {():void},
    handleEditNoticed: {():void},
}


const MonthDays = ({
  days,
  handleSelectedDate,
  handleEditNoticed,
}: Props) => (
  <Flex
    wrap="wrap"
    width="90%"
    justify="center"
  >
    {
        days.map(item => (
          <DayMonthItem
            scrollY
            selected={item.selected}
            event={item.note.length}
            key={item.id}
            onClick={() => handleSelectedDate(item.day)}
          >
            <NumberText
              dayNow={item.dayNow}
            >
              {item.dayNumber}
            </NumberText>
            <EventContainer
              width="100%"
              heigth="100%"
            >
              {
                  item.note.length
                    ? (
                      item.note.map(note => (
                        <EventItem
                          key={note.id}
                          complete={note.complete}
                          onClick={() => handleEditNoticed({
                            ...note,
                          })}
                        >
                          <Text
                            size="9px"
                            low="true"
                            align="left"
                          >
                            {`Event: ${note.event}`}
                          </Text>
                          <Text
                            size="9px"
                            low="true"
                            align="left"
                          >
                            {`Person: ${note.participans}`}
                          </Text>
                          <Text
                            size="9px"
                            low="true"
                            align="left"
                          >
                            {`Desc: ${note.description}`}
                          </Text>
                        </EventItem>
                      ))
                    ) : null
              }
            </EventContainer>
          </DayMonthItem>
        ))
      }
  </Flex>
);

export default MonthDays;
