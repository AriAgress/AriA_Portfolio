import styled from "styled-components";

//images
import AriProfile from "../../Assets/AriProfile.png";

export const AboutWrapper = styled.div`
  /* height: 800px; */

  color: ${props => (props.colorSwitch === true ? "black" : "white")};

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 100px;
`;
export const ImgContainer = styled.div`
  width: 50%;
  height: 400px;

  box-shadow: ${props =>
    props.colorSwitch === true ? "-20px -20px #84b4ca" : "-20px -20px #064663"};
  border-radius: 25px;
  margin-left: 20px;
`;
export const AboutImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${AriProfile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
`;

export const TextContainer = styled.div`
  height: 400px;
  width: 50%;
  padding-left: 60px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
