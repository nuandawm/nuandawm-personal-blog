import React from 'react';
import { graphql } from 'gatsby';
import { useConfig } from 'gatsby-theme-advanced';
import Layout from 'gatsby-theme-amaranth/src/layouts';
import { LayoutWidthContainer } from 'gatsby-theme-amaranth';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { DigitalSkillAreaI, WorkExperienceI } from '../types';
import WorkExperience from '../components/WorkExperience';
import HorizontalRule from '../components/HorizontalRule';
import CleanList from '../components/CleanList';
import DigitalSkillArea from '../components/DigitalSkillArea';
import TimeProgressionComponent from '../components/TimeProgressionComponent';

const Wrapper = styled.main`
  display: grid;
  
  grid-row-gap: 20px;
`;

const HeadlineWrapper = styled.header`
  
`

const PersonalInformationWrapper = styled.div`
  display: grid;
  row-gap: 10px;
  
  background-color: var(--color-grey-800);
  padding: 20px;
`

const personalInfoData = [{
  label: 'Date of birth',
  value: '05/03/1982'
}, {
  label: 'Nationality',
  value: 'Italian'
}, {
  label: 'Phone',
  value: '(+39) 3288422844'
}, {
  label: 'email',
  value: 'derossi.giuliano@gmail.com'
}]

const DigitalSkillsWrapper = styled.div`
  
`

const WorkExperienceWrapper = styled.div`
  
`

type ProfessionalCVPageProps = {
  data: {
    allContentfulWorkExperience: {
      edges: Array<{
        node: WorkExperienceI
      }>
    },
    allContentfulDigitalSkillArea: {
      edges: Array<{
        node: DigitalSkillAreaI
      }>
    }
  }
}

const ProfessionalCVPage = ({data}: ProfessionalCVPageProps): JSX.Element => {
  const config = useConfig();

  const workExperiences: WorkExperienceI[] = data.allContentfulWorkExperience.edges.map(el => el.node)
  const digitalSkillsAreas: DigitalSkillAreaI[] = data.allContentfulDigitalSkillArea.edges.map(el => el.node)

  return (
    <Layout>
      <Helmet title={`Professional CV | ${config.website.title}`} />
      <LayoutWidthContainer>
        <Wrapper>
          <HeadlineWrapper>
            <h1>Giuliano De Rossi</h1>
            <h2>Senior Front End Developer - BSc</h2>
            <HorizontalRule spaced/>
          </HeadlineWrapper>

          <PersonalInformationWrapper>
            <CleanList>
              {personalInfoData.map((info, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
                  <p><b>{info.label}:</b> {info.value}</p>
                </li>
              ))}
            </CleanList>
            <p>
              Physics - BSc<br/>
              Senior Front End Developer<br/>
              Mid Back End Developer<br/>
              <i>Visa sponsorship required</i>
            </p>
          </PersonalInformationWrapper>

          <DigitalSkillsWrapper>
            <h4>Digital skills</h4>
            <HorizontalRule spaced />
            {digitalSkillsAreas.map(dsa => <DigitalSkillArea item={dsa} key={`key-${dsa.id}`} />)}
          </DigitalSkillsWrapper>

          <WorkExperienceWrapper>
            <h4>Work experience</h4>
            <HorizontalRule spaced />
            {workExperiences.map(
              (we, i, list) =>
                <TimeProgressionComponent key={`key-${we.id}`}
                                          isFirst={i === 0}
                                          isLast={i === list.length - 1}>
                  <WorkExperience item={we} />
                </TimeProgressionComponent>)}
          </WorkExperienceWrapper>
        </Wrapper>
      </LayoutWidthContainer>
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
    allContentfulDigitalSkillArea {
      edges {
        node {
          areaName
          contentful_id
          id
          skills
        }
      }
    }
  }
`
