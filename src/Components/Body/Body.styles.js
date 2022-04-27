import styled from 'styled-components';

// images
import AriAvatar from '../../Assets/AriAvatar.png';

export const BodyWrapper = styled.div`
  /* height: 60vh; */
  height: 800px;

  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};

  display: flex;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: center;

  margin-top: 100px;
`;

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 40%;
`;

export const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${AriAvatar});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  width: 60%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 60px;
`;

export const DescriptionBox = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  margin-left: 30px;
`;

export const ProjectButton = styled.div`
  font-size: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Anchor = styled.a`
  &:visited {
    text-decoration: none;
    color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  }
  &:hover {
    color: #ecb365;
  }
`;
