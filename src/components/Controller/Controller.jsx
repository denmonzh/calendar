// @flow
import React from 'react';
import {
  Flex,
} from 'web-styled';
import backArrow from 'web-assets/back.svg';
import nextArrow from 'web-assets/next.svg';
import dateFns from 'date-fns';
import {
  Text,
} from 'web-styled';
import {
  ControllerItem,
  Arrow,
} from './styled';

type Props = {
    current: object,
    pending: boolean,
    handleNextMonth: {(): void},
    handlePrevMonth: {(): void},
}


const Controller = ({
  current,
  pending,
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
        <Arrow
          src={backArrow}
          alt="Arrow"
          onClick={() => handlePrevMonth()}
        />
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
        <Arrow
          src={nextArrow}
          alt="Arrow"
          onClick={() => handleNextMonth()}
        />
      </ControllerItem>
    </Flex>
  );
};


export default Controller;
