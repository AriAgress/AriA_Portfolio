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
  I,
} from './Nav.styles.js';

const Nav = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);

  return (
    <NavWrapper colorSwitch={colorSwitch}>
      <NavContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavLinksContainer>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Links colorSwitch={colorSwitch} alt='HOME'>
              <I colorSwitch={colorSwitch}>H</I>
              <I colorSwitch={colorSwitch}>O</I>
              <I colorSwitch={colorSwitch}>M</I>
              <I colorSwitch={colorSwitch}>E</I>
            </Links>
          </Link>
          <Link to='/About' style={{ textDecoration: 'none' }}>
            <Links colorSwitch={colorSwitch} alt='ABOUT'>
              <I colorSwitch={colorSwitch}>A</I>
              <I colorSwitch={colorSwitch}>B</I>
              <I colorSwitch={colorSwitch}>O</I>
              <I colorSwitch={colorSwitch}>U</I>
              <I colorSwitch={colorSwitch}>T</I>
            </Links>
          </Link>
          <ToggleSwitch colorSwitch={colorSwitch} />
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
