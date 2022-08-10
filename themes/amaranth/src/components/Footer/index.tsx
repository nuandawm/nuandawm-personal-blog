import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";

import * as S from "./styles";
import { Caption } from '../../theme';
import { AnimatedLink } from '../Links';

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        No developers have been harmed during the making of this blog.
        <Caption>
          Based on{" "}
          <AnimatedLink to="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </AnimatedLink>
        </Caption>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
