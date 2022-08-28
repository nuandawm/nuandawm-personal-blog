import React from 'react';
import styled from 'styled-components';

import { DigitalSkillAreaI } from '../../types';
import CleanList from '../CleanList';

const Wrapper = styled.div`
  
`

type DigitalSkillAreaProps = {
  item: DigitalSkillAreaI
}

const DigitalSkillArea = ({item}: DigitalSkillAreaProps) => (<Wrapper>
  <h5>{item.areaName}</h5>
  <CleanList>
    {/* eslint-disable-next-line react/no-array-index-key */}
    {item.skills.map((elem, i) => (<li key={i}><p>{elem}</p></li>))}
  </CleanList>
</Wrapper>)

export default DigitalSkillArea
