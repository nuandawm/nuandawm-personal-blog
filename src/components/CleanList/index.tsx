import React from 'react';

import styled from 'styled-components';

const CleanList = styled.ul`
  li {
    list-style-type: none;
    display: inline-block;
    padding-right: 10px;
  }
`

// eslint-disable-next-line react/jsx-props-no-spreading
const CleanListComponent: React.FC = props => <CleanList {...props}/>

export default CleanListComponent
