import React from "react";
import { useSelector } from "react-redux";

//Icons
import { MdEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
  AiFillHeart,
} from "react-icons/ai";

// stylesheet
import {
  FooterWrapper,
  FooterContainer,
  Text,
  Icons,
  CopyWright,
  A,
} from "./Footer.styles.js";

const Footer = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <FooterWrapper colorSwitch={colorSwitch}>
      <FooterContainer>
        <Text>LET'S CONNECT</Text>
        <Icons>
          <A href="mailto:ariagress@gmail.com" colorSwitch={colorSwitch}>
            <MdEmail />
          </A>
          <A
            href="https://www.linkedin.com/in/ariel-agress/"
            colorSwitch={colorSwitch}>
            <AiFillLinkedin />
          </A>
          <A href="https://github.com/AriAgress" colorSwitch={colorSwitch}>
            <AiFillGithub />
          </A>
        </Icons>
        <CopyWright>
          Copywright <AiOutlineCopyrightCircle /> 2022 Made with <AiFillHeart />{" "}
          by Ari Agress
        </CopyWright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
