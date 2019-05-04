import React from 'react';
import SearchIcon from 'web-assets/loupe_icon.svg';
import {
  HeaderContainer,
  Icon,
  Search,
} from './style';

const Header = () => (
  <HeaderContainer>
    <Icon
      src={SearchIcon}
    />
    <Search
      placeholder="Events..."
    />
  </HeaderContainer>
);


export default Header;
