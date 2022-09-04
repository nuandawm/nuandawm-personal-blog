import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { styles } from 'gatsby-theme-amaranth';
import { breakpoints } from 'gatsby-theme-amaranth/src/theme/Constants';

// Modal context
export type ModalData = {
  isOpen: boolean,
  content: React.FC<any>,
  open: (content: React.FC<any>) => void,
  close?: () => void
}

export const ModalContext = React.createContext<ModalData>({
  isOpen: false,
  content: () => null,
  open: () => {},
  close: () => {}
})

const ModalHeader = styled.div`
  border-radius: 10px 10px 0 0;
  border: 1px solid var(--color-grey-600);
  padding: 10px 20px;
  background-color: var(--color-grey-700);
`

const ModalBody = styled.div`
  padding: 10px 20px;
  overflow: auto;
  border-left: 1px solid var(--color-grey-600);
  border-right: 1px solid var(--color-grey-600);
  flex-grow: 1;
  
  p {
    padding: 5px 0;
  }
  
  li {
    margin-left: 1em;
  }
`

const ModalFooter = styled.div`
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--color-grey-600);
  padding: 10px 20px;
  background-color: var(--color-grey-700);
  display: flex;
  justify-content: flex-end;

  button {
    all: unset;

    ${styles.ButtonLabel}

    cursor: pointer;
  }
`

const fadeInAnimation = css`
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 500ms;
`

const fadeOutAnimation = css`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 500ms, opacity 500ms;
`

const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  visibility: hidden;
  opacity: 0;

  &&.fadeIn {
    ${fadeInAnimation}
  }

  &&.fadeOut {
    ${fadeOutAnimation}
  }
`

const Wrapper = styled.div`
  z-index: 101;
  position: fixed;
  width: 90vw;
  height: 90vh;
  @media (min-width: ${breakpoints.sm}) {
    width: 500px;
  }
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-800);
  border-radius: 10px;
  
  visibility: hidden;
  opacity: 0;

  &&.fadeIn {
    ${fadeInAnimation}
  }
  
  &&.fadeOut {
    ${fadeOutAnimation}
  }
`

const Modal: React.FC = () => {
  const { isOpen, content, close } = useContext(ModalContext);

  return <>
    <Backdrop className={isOpen ? 'fadeIn' : 'fadeOut'} onClick={close}/>
    <Wrapper className={isOpen ? 'fadeIn' : 'fadeOut'}>
      <ModalHeader>
        <h4>More details</h4>
      </ModalHeader>
      <ModalBody>
        {content}
      </ModalBody>
      <ModalFooter>
        <button type="button" onClick={close}>close</button>
      </ModalFooter>
    </Wrapper>
  </>
}

export default Modal
