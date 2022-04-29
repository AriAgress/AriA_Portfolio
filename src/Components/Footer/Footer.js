import React from 'react';
import { useSelector } from 'react-redux';

//Icons
import { MdEmail, MdNoEncryption } from 'react-icons/md';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
  AiFillHeart,
} from 'react-icons/ai';

// stylesheet
import {
  FooterWrapper,
  FooterContainer,
  Text,
  Icons,
  CopyWright,
  A,
} from './Footer.styles.js';

const Footer = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <FooterWrapper colorSwitch={colorSwitch}>
      <FooterContainer>
        <Text>LETS CONNECT</Text>
        <Icons>
          <A href='mailto:ariagress@gmail.com' style={{ color: 'black' }}>
            <MdEmail />
          </A>
          <A href='https://www.linkedin.com/in/ariel-agress/'>
            <AiFillLinkedin />
          </A>
          <A href='https://github.com/AriAgress'>
            <AiFillGithub />
          </A>
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
