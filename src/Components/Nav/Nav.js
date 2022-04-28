import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Projects from '../Projects/Projects';

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
        <Link to='/' style={{ textDecoration: 'none' }}>
          <LogoContainer>Logo</LogoContainer>
        </Link>
        <NavLinksContainer>
          <a href='#ToProject' style={{ textDecoration: 'none' }}>
            <Links colorSwitch={colorSwitch} alt='WORK'>
              <I colorSwitch={colorSwitch}>W</I>
              <I colorSwitch={colorSwitch}>O</I>
              <I colorSwitch={colorSwitch}>R</I>
              <I colorSwitch={colorSwitch}>K</I>
            </Links>
          </a>
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
