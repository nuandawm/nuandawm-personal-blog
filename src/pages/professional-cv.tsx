import React from "react";
import { graphql } from 'gatsby';
import { useConfig } from 'gatsby-theme-advanced';
import Layout from 'gatsby-theme-amaranth/src/layouts';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { WorkExperienceI } from '../types';
import WorkExperience from '../components/WorkExperience';

const Wrapper = styled.main`
  width: 100%;

  display: grid;
  grid-gap: 24px;
  
  justify-content: flex-end;
  padding-right: 10px;
`;

type ProfessionalCVPageProps = {
  data: {
    allContentfulWorkExperience: {
      edges: Array<{
        node: WorkExperienceI
      }>
    }
  }
}

const ProfessionalCVPage = ({data}: ProfessionalCVPageProps): JSX.Element => {
  const config = useConfig();

  const workExperiences: WorkExperienceI[] = data.allContentfulWorkExperience.edges.map(el => el.node);

  return (
    <Layout>
      <Helmet title={`Professional CV | ${config.website.title}`} />
      <Wrapper>
        {workExperiences.map(
          we => <WorkExperience item={we} key={`key-${we.id}`} />)}
      </Wrapper>
    </Layout>
  );
};

export default ProfessionalCVPage;

export const query = graphql`
  query WorkExperienceQuery {
    allContentfulWorkExperience(sort: {fields: from, order: DESC}) {
      edges {
        node {
          company
          contentful_id
          country
          from(formatString: "DD/MM/YYYY")
          id
          role
          to(formatString: "DD/MM/YYYY")
          description {
            raw
          }
        }
      }
    }
  }
`
