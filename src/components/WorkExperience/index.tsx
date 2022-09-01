import React from "react";
import styled from 'styled-components';
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { WorkExperienceI } from '../../types';
import HorizontalRule from '../HorizontalRule';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 600px;
  background-color: var(--color-grey-800);
  border-radius: 10px;
  margin-bottom: 30px;
`

const DatesContainer = styled.p`

`

const RoleCompanyContainer = styled.p`

`

const DescriptionContainer = styled.div`
  padding: 10px;
  
  p {
    font-size: 10pt;
  }
  
  li {
    margin-left: 1em;
  }
`

type WorkExperienceProps = {
  item: WorkExperienceI
}

const WorkExperience = ({ item }: WorkExperienceProps) => (<Wrapper>
  <DatesContainer>
    {item.from} - {item.to}
  </DatesContainer>
  <RoleCompanyContainer>
    Company: {item.company}
  </RoleCompanyContainer>
  <HorizontalRule/>
  <DescriptionContainer>
    {item.description.raw && renderRichText(item.description as RenderRichTextData<any>)}
  </DescriptionContainer>
</Wrapper>)

export default WorkExperience
