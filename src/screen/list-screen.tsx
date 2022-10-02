import {useState } from "react";
import styled from "styled-components";
import AddItemButton from "../component/add-item-button";
import Modal from "../component/modal";
import TodoList from "../component/todo-list";

const Container = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
  z-index = 3;
`;

const TodoScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddItemButton = (e: React.MouseEvent) => {
        setIsOpen(true);
    };

    return(
        <>{isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
        <Container>  
            <TodoList></TodoList>
        </Container>
        <div>
            <AddItemButton onClick={handleAddItemButton}></AddItemButton>          
        </div>
        </>
            
    );
}

export default TodoScreen;

/* Conditional rendering
Inline If with Logical && Operator

It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

*/