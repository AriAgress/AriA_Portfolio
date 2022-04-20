import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
  height: 10vh;

  color: white;
  border-bottom: 5px solid #ecb365;

  display: flex;
  justify-content: center;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: row;
  justify-content: space-between;

  margin-top: 6vh;
  margin-bottom: 1vh;
`;

const LogoContainer = styled.div``;

const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

const Links = styled.div`
  padding-left: 0.5vh;
  padding-right: 0.5vh;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavLinksContainer>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <button>Button</button>
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
