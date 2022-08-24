import * as React from "react";

import { createGlobalStyle, css } from "styled-components";

const ContainerStyle = css`
  max-width: 100%;
  text-align: center;
`

export const styles = {
  Container: ContainerStyle
}

const PageStyles = createGlobalStyle`
  .container {
    ${ContainerStyle}
  }
`

const Page = (): JSX.Element => (<PageStyles/>);

export default Page
