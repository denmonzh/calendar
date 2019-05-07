// @flow
import React, {
  useState,
  useEffect,
} from 'react';
import SearchIcon from 'web-assets/loupe_icon.svg';
import {
  Flex,
  Input,
} from 'web-styled';
import {
  HeaderContainer,
  Icon,
  AddNotification,
} from './style';

type Props = {
    handleModalIsOpen: {(): void},
    noticed: Array,
}

const Header = ({ handleModalIsOpen, noticed }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const searchArray = noticed.filter((item) => {
      if (item.event.indexOf(searchTerm) !== -1) {
        return item;
      } if (item.participans.indexOf(searchTerm) !== -1) {
        return item;
      } if (item.description.indexOf(searchTerm) !== -1) {
        return item;
      }
      return [];
    });
  }, [searchTerm]);

  console.log(searchTerm);

  return (
    <HeaderContainer>
      <Flex
        width="50%"
        align="center"
        justify="space-around"
      >
        <AddNotification
          onClick={() => handleModalIsOpen()}
        >
                    Add notation
        </AddNotification>
      </Flex>
      <Flex
        width="50%"
        justify="center"
        align="center"
      >
        <Flex
          width="50%"
          justify="center"
          align="center"
        >
          <Icon
            src={SearchIcon}
          />
        </Flex>
        <Input
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          width="40%"
          margin="initial"
        />
      </Flex>
    </HeaderContainer>
  );
};


export default Header;
