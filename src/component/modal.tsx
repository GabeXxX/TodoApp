import {  useEffect} from "react";
import styled from 'styled-components';
import useTodoStore from '../service/local-storage-service';
import React from "react";

const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const Panel = styled.div`
    border-radius: 32px;
    background: #242424;
    padding: 40px;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 12px 24px rgba(0,0,0, 0.25);

`;

const Button = styled.button`
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    background: #716FB2;
    border-radius: 32px;
    box-shadow: 4px 12px 24px rgba(0,0,0, 0.25);
    &:hover {
        box-shadow: 4px 12px 24px rgba(0,0,0, 0.6);
        transition: 0.2s;
      }
`;

const ButtonText = styled.div`
padding: 8px 32px;
    text: #01001e;
    font-size: 20px;
    font-weight: medium;
`;

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };

const SaveButton =  ({onClick}: ButtonProps,  {...props }) => {
    return(
        <ButtonContainer>
            <Button onClick={onClick} {...props}>
                    <ButtonText>Salva</ButtonText>
            </Button>
        </ButtonContainer>
    );
};


const TextInputContainer = styled.div`
    width: 429px;
    height: 155px;
    margin-bottom: 24px;

`;

const TextInput = styled.textarea`
    border: none;
    background: none; 
    height: 100%;
    width:100%;
    font-weight: 200;
    color: white;
    font-size: 20px;
`;

type AppProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal =({setIsOpen}: AppProps) =>{
    const inputRef = React.createRef<HTMLTextAreaElement>();
    const modalRef = React.createRef<HTMLDivElement>();

    const {todos, 
           setTodos, 
           newTodoName, 
           setNewTodoName, 
           handleNewItemName,
           handleSaveItem,} = useTodoStore();

    const handlerOnSaveClick = (e: React.MouseEvent) => {
        handleSaveItem(e);
        setIsOpen(false);
    };

    const handlerOnBackClick = (e: React.MouseEvent) => {
        if (modalRef.current === e.target) {
            setIsOpen(false);         
          }
    };

    useEffect(() => {
        inputRef.current?.focus();
      }, []);


    return(
        <DarkBackground onClick={handlerOnBackClick} ref={modalRef}>
            <Panel>
                <TextInputContainer><TextInput ref={inputRef} placeholder="Inserisci" value={newTodoName} onChange={handleNewItemName} /></TextInputContainer>           
                <SaveButton onClick={handlerOnSaveClick}></SaveButton>
            </Panel>
        </DarkBackground>
    )
};

export default Modal;
