import styled from 'styled-components';

export const NavWrapper = styled.div`
  height: 125px;

  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  border-bottom: 5px solid #ecb365;

  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: row;
  justify-content: space-between;

  margin-top: 6vh;
  margin-bottom: 1vh;
`;

export const LogoContainer = styled.div``;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const Links = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  text-decoration: none;

  &:visited {
    color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  }
  &:hover {
    color: #ecb365;
  }
`;
