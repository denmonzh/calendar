// @flow
import React from 'react';
import {
  Flex,
  Text,
} from 'web-styled';
import dateFns from 'date-fns';
import {
  ControllerItem,
} from './styled';

type Props = {
    current: object,
    handleNextMonth: {(): void},
    handlePrevMonth: {(): void},
}


const Controller = ({
  current,
  handleNextMonth,
  handlePrevMonth,
}: Props) => {
  const dateFormat = 'MMMM YYYY';

  return (
    <Flex
      width="100%"
      height="60px"
      justify="space-between"
      align="center"
    >
      <ControllerItem>
        <Text
          size="50px"
          cursor="pointer"
          onClick={() => handlePrevMonth()}
        >
              &#60;
        </Text>
      </ControllerItem>
      <ControllerItem>
        <Text
          size="24px"
        >
          {
            dateFns.format(current.currentMonth, dateFormat)
          }
        </Text>
      </ControllerItem>
      <ControllerItem>
        <Text
          size="50px"
          cursor="pointer"
          onClick={() => handleNextMonth()}
        >
            &#62;
        </Text>
      </ControllerItem>
    </Flex>
  );
};


export default Controller;
