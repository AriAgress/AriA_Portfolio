import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 275px;

  color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
  border-top: ${(props) =>
    props.colorSwitch === true ? "5px solid #ecb365" : "5px solid #3BD1BD"};

  display: flex;
  justify-content: center;
`;
export const FooterContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 10px;

  // media queries
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 95%;
  }
`;
export const Text = styled.div`
  font-size: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
  font-family: "Bebas Neue", cursive;
`;
export const Icons = styled.div`
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const A = styled.a`
  color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
  &:visited {
    color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
    text-decoration: none;
  }
`;

export const CopyWright = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
`;
