import React from 'react';

import styled from 'styled-components';

const HorizontalRule = styled.hr`
  margin-top: ${props => props.spaced ? '10px' : '0'}
  margin-bottom: ${props => props.spaced ? '20px' : '0'}
`

// TODO Find out why the spaced prop is not working
type Props = {spaced?: boolean}

// eslint-disable-next-line react/jsx-props-no-spreading
const HorizontalRuleComponent: React.FC<Props> = props => <HorizontalRule {...props} />

export default HorizontalRuleComponent

