import React from 'react';
import {
  Flex,
} from 'web-styled';
import backArrow from 'web-assets/back.svg';
import nextArrow from 'web-assets/next.svg';
import {
  ControllerItem,
  Arrow,
} from './styled';

const Controller = () => {
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
        />
      </ControllerItem>
      <ControllerItem>
                Date now
      </ControllerItem>
      <ControllerItem>
        <Arrow
          src={nextArrow}
          alt="Arrow"
        />
      </ControllerItem>
    </Flex>
  );
};


export default Controller;
