import React from 'react';
import styled from 'styled-components';

//Icons
import { MdEmail } from 'react-icons/md';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
  AiFillHeart,
} from 'react-icons/ai';

const FooterWrapper = styled.div`
  height: 20vh;

  color: white;
  border-top: 5px solid #ecb365;

  display: flex;
  justify-content: center;
`;
const FooterContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 10px;
`;
const Text = styled.div`
  font-size: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
`;
const Icons = styled.div`
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const CopyWright = styled.div`
  font-size: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Text>LETS CONNECT</Text>
        <Icons>
          <MdEmail />
          <AiFillLinkedin />
          <AiFillGithub />
        </Icons>
        <CopyWright>
          Copywright <AiOutlineCopyrightCircle /> 2022 Made with <AiFillHeart />{' '}
          by Ari Agress
        </CopyWright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
