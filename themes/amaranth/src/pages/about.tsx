import * as React from "react";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";

const Container = styled.div`
  text-align: center;
`

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <Helmet title={`About | ${config.website.title}`} />
      <Container>
        <h1>Coming soon</h1>
      </Container>
    </Layout>
  );
};

export default AboutPage;
