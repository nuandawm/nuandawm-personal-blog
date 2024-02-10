import React, { useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import { useConfig } from 'gatsby-theme-advanced';
import Layout from 'gatsby-theme-amaranth/src/layouts';
import { LayoutWidthContainer } from 'gatsby-theme-amaranth';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { DigitalSkillAreaI, EducationAndTrainingI, WorkExperienceI } from '../types';
import WorkExperience from '../components/WorkExperience';
import HorizontalRule from '../components/HorizontalRule';
import CleanList from '../components/CleanList';
import DigitalSkillArea from '../components/DigitalSkillArea';
import TimeProgressionComponent from '../components/TimeProgressionComponent';
import EducationAndTraining from '../components/EducationAndTraining';
import Modal, { ModalContext, ModalData } from '../components/Modal';

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

const LanguageTable = styled.table`
  border-collapse: collapse;
  border: 2px solid white;
  text-align: center;
`

const LanguageTableHeading = styled.th`
  padding: 5px 20px;
`

const LanguageTableRow = styled.tr`
  
`

const LanguageTableCell = styled.td`
  border: solid white;
  border-width: 1px 0;
  padding: 5px;
`

const EasterEggLink = styled.a`
  color: white;
  text-decoration: none;
`

const personalInfoData = [{
  label: 'Date of birth',
  value: '05/03/1982'
}, {
  label: 'Nationality',
  value: 'Italian'
}, {
  label: 'Phone',
  value: '(+44) 07734 454185'
}, {
  label: 'email',
  value: 'derossi.giuliano@gmail.com'
}]

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
    },
    allContentfulEducationAndTraining: {
      edges: Array<{
        node: EducationAndTrainingI
      }>
    }
  }
}

const ProfessionalCVPage = ({data}: ProfessionalCVPageProps): JSX.Element => {
  const config = useConfig();

  const workExperiences: WorkExperienceI[] = data.allContentfulWorkExperience.edges.map(el => el.node)
  const digitalSkillsAreas: DigitalSkillAreaI[] = data.allContentfulDigitalSkillArea.edges.map(el => el.node)
  const educationAndTrainings: EducationAndTrainingI[] = data.allContentfulEducationAndTraining.edges.map(el => el.node)

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.FC<any>>(() => null);
  const initialModalData = useMemo(() => ({
    isOpen,
    content: modalContent,
    open: (content) => {
      setModalContent(content)
      setIsOpen(true)
    },
    close: () => {
      setIsOpen(false)
    }
  } as ModalData), [isOpen, modalContent]);

  return (<ModalContext.Provider value={initialModalData}>
    <Layout>
      <Helmet title={`Professional CV | ${config.website.title}`} />
      <Modal />
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
              English language proficiency: Full professional<br/>
              Currently based in Nottingham, UK<br/>
              <i>Visa sponsorship required</i>
            </p>
          </PersonalInformationWrapper>

          <div>
            <h4>Digital skills</h4>
            <HorizontalRule spaced />
            {digitalSkillsAreas.map(dsa => <DigitalSkillArea item={dsa} key={`key-${dsa.id}`} />)}
          </div>

          <div>
            <h4>Work experience</h4>
            <HorizontalRule spaced />
            {workExperiences.map(
              (we, i, list) =>
                <TimeProgressionComponent key={`key-${we.id}`}
                                          isFirst={i === 0}
                                          isLast={i === list.length - 1}>
                  <WorkExperience item={we} />
                </TimeProgressionComponent>)}
          </div>

          <div>
            <h4>Education and training</h4>
            <HorizontalRule spaced />
            {educationAndTrainings.map(eat => <EducationAndTraining item={eat} key={`key-${eat.id}`} />)}
          </div>

          <div>
            <h4>Language skills</h4>
            <HorizontalRule spaced />
            <p>
              Mother tongue: <b>ITALIAN</b>
            </p>
            <p>
              Other languages:
              <LanguageTable>
                <LanguageTableRow>
                  <th/>
                  <LanguageTableHeading colSpan={2}>Understanding</LanguageTableHeading>
                  <LanguageTableHeading colSpan={2}>Speaking</LanguageTableHeading>
                  <LanguageTableHeading>Writing</LanguageTableHeading>
                </LanguageTableRow>
                <LanguageTableRow>
                  <LanguageTableCell/>
                  <LanguageTableCell>Listening</LanguageTableCell>
                  <LanguageTableCell>Reading</LanguageTableCell>
                  <LanguageTableCell>Spoken production</LanguageTableCell>
                  <LanguageTableCell>Spoken interaction</LanguageTableCell>
                  <LanguageTableCell/>
                </LanguageTableRow>
                <LanguageTableRow>
                  <LanguageTableHeading>English</LanguageTableHeading>
                  <LanguageTableCell>B2</LanguageTableCell>
                  <LanguageTableCell>B2</LanguageTableCell>
                  <LanguageTableCell>B2</LanguageTableCell>
                  <LanguageTableCell>B2</LanguageTableCell>
                  <LanguageTableCell>B2</LanguageTableCell>
                </LanguageTableRow>
              </LanguageTable>
            </p>
          </div>

          <div>
            <h4>Communication and interpersonal skills</h4>
            <HorizontalRule spaced />
            <p>
              Good communication skills learned through my experience as a teacher in IT classes and working
              in teams over the years.
            </p>
          </div>

          <div>
            <h4>Hobbies and interests</h4>
            <HorizontalRule spaced />
            <p>
              Lindy Hop and Balboa Swing <EasterEggLink
              href="https://www.facebook.com/royalswingfest/photos/t.747524408/847410925465643/"
              target="_blank">dancer</EasterEggLink>.<br/>
              Fan of any Physics and Mathematics <EasterEggLink
              href="https://en.wikipedia.org/wiki/G2_(mathematics)"
              target="_blank">
              topics</EasterEggLink>.<br/>
              Bass guitar <EasterEggLink
              href="https://www.facebook.com/gediarocks/photos/t.747524408/182958705070040/"
              target="_blank">player</EasterEggLink>.
            </p>
          </div>
        </Wrapper>
      </LayoutWidthContainer>
    </Layout>
  </ModalContext.Provider>);
};

export default ProfessionalCVPage;

export const query = graphql`
  query WorkExperienceQuery {
    allContentfulWorkExperience(sort: {fields: from, order: DESC}) {
      edges {
        node {
          id
          contentful_id
          company
          country
          from(formatString: "DD/MM/YYYY")
          to(formatString: "DD/MM/YYYY")
          role
          description {
            raw
          }
          longDescription {
            raw
          }
        }
      }
    }
    allContentfulDigitalSkillArea(sort: {fields: priority, order: ASC}) {
      edges {
        node {
          areaName
          contentful_id
          id
          skills
        }
      }
    }
    allContentfulEducationAndTraining(sort: {fields: from, order: DESC}) {
      edges {
        node {
          id
          contentful_id
          country
          from(formatString: "DD/MM/YYYY")
          to(formatString: "DD/MM/YYYY")
          name
          institution
          description {
            raw
          }
        }
      }
    }
  }
`
