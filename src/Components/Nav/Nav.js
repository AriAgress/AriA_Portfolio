import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../Actions/Index';

const NavWrapper = styled.div`
  height: 125px;

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
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }
  &:hover {
    color: #ecb365;
  }
`;

const Nav = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <NavContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavLinksContainer>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Links>Home</Links>
          </Link>
          <Link to='/About' style={{ textDecoration: 'none' }}>
            <Links>About</Links>
          </Link>
          <button
            colorSwitch={colorSwitch}
            onClick={() => dispatch(setColor(!colorSwitch))}>
            Button
          </button>
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
