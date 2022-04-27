import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: 275px;

  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  border-top: 5px solid #ecb365;

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
`;
export const Text = styled.div`
  font-size: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
`;
export const Icons = styled.div`
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
export const CopyWright = styled.div`
  font-size: 10px;
`;
