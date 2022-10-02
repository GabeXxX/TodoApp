import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    background: #716FB2;
    box-shadow: 4px 12px 24px rgba(0,0,0, 0.25);
    border-radius: 32px;
    &:hover {
        box-shadow: 4px 12px 24px rgba(0,0,0, 0.6);
        transition: 0.2s;
      }
      
`;

const Button = styled.button`
    border: none;
    background: none;
    width: 100%;
    heigth: 100%;
    z-index: 2;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
`;

const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 32px;
    margin-right: 32px;

`;
const ButtonText = styled.div`
    text: #01001e;
    font-size: 20px;
    font-weight: medium;
`;

const IconContainer = styled.div`
    margin-right: 24px;
`;

const AddIcon = () =>{

    return(
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 20L7 20" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M20 33L20 7" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>

    );
};

type AppProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };

const AddItemButton =  ({onClick}: AppProps,  {...props }) => {
    return(
        <ButtonContainer>
            <Button onClick={onClick} {...props}>
                <ButtonContent>
                    <IconContainer><AddIcon></AddIcon></IconContainer>                   
                    <ButtonText>Nuova voce</ButtonText>
                </ButtonContent>
            </Button>
        </ButtonContainer>
    );
}

export default AddItemButton;