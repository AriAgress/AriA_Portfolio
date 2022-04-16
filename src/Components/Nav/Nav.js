import React from 'react';
import styledComponents from 'styled-components';

const NavContainer = styled.div`
  max-width: 960px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <div>Logo</div>
      <div>Menu</div>
      <div>About</div>
      <button></button>
    </NavContainer>
  );
};

export default Nav;
