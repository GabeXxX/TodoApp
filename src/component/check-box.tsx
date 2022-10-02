import React, { ComponentProps } from 'react';
import styled, { StyledComponent } from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  position: relative;
  margin-right: 24px;
  margin-left: 40px;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0;
  opacity: 0%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`
const CheckBoxOn = styled.svg` 

    position: absolute;
`;

const CheckBoxOff = styled.svg` 

    position: absolute;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 150ms;
  ${CheckBoxOn} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`


type Props = ComponentProps<StyledComponent<'input', any, {}>>;

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
        <CheckBoxOff width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="36" height="36" rx="6" stroke="white" stroke-width="4"/></CheckBoxOff>
    <CheckBoxOn width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="40" height="40" rx="8" fill="white"/>
    <path d="M13 19.6875L18.1923 25L28 15" stroke="#1F1F1F" stroke-width="4" stroke-linecap="round"/></CheckBoxOn>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox