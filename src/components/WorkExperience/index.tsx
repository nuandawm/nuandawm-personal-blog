import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { styles } from 'gatsby-theme-amaranth';
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { WorkExperienceI } from '../../types';
import HorizontalRule from '../HorizontalRule';
import { ModalContext } from '../Modal';

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

const ReadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button {
    all: unset;

    ${styles.ButtonLabel}
    
    cursor: pointer;
  }
`

type WorkExperienceProps = {
  item: WorkExperienceI
}

const LongDescriptionWrapper = styled.div`
  
`

type LongDescriptionModalContentProps = {
  content: React.ReactNode
}

const LongDescriptionModalContent = ({content}: LongDescriptionModalContentProps) => (
  <LongDescriptionWrapper>
    {content}
  </LongDescriptionWrapper>)

const WorkExperience = ({ item }: WorkExperienceProps) => {
  const { open } = useContext(ModalContext);

  const handleOpenModal = useCallback(() => {
    const view = renderRichText(item.longDescription as RenderRichTextData<any>)
    open(() => <LongDescriptionModalContent content={view} />)
  }, [item, open])

  return <Wrapper>
    <DatesContainer>
      {item.from} -  {item.to}
    </DatesContainer>
    <RoleCompanyContainer>
      <b>{item.role}</b><br/>
      Company: {item.company}
    </RoleCompanyContainer>
    <HorizontalRule/>
    {item.description.raw && <DescriptionContainer>
      {renderRichText(item.description as RenderRichTextData<any>)}
    </DescriptionContainer>}
    {item.longDescription?.raw && <ReadMoreButtonWrapper>
      <button type="button" onClick={handleOpenModal}>read more</button>
    </ReadMoreButtonWrapper>}
  </Wrapper>
}

export default WorkExperience
