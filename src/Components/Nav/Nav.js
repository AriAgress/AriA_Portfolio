import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

//stylesheet
import {
  NavWrapper,
  NavContainer,
  LogoContainer,
  NavLinksContainer,
  Links,
} from './Nav.styles.js';

const Nav = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);

  return (
    <NavWrapper colorSwitch={colorSwitch}>
      <NavContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavLinksContainer>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Links colorSwitch={colorSwitch}>Home</Links>
          </Link>
          <Link to='/About' style={{ textDecoration: 'none' }}>
            <Links colorSwitch={colorSwitch}>About</Links>
          </Link>
          <ToggleSwitch colorSwitch={colorSwitch} />
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
