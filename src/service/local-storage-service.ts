import {Todo} from "../data-model";
import {ChangeEvent, useContext, useState} from "react";
import TodoContext from "../context/todo-context";
import { nanoid } from 'nanoid';

const useTodoStore = () => {

    // local storage hook injected by the context provider from top of the tree component down the all tree hierarchy
    const [todos, setTodos] = useContext(TodoContext); 
    const [newTodoName, setNewTodoName] = useState('');
    
    const handleCheckBoxChange = (handledTodo: Todo) => (e: ChangeEvent<HTMLInputElement>) => { //take a handledTodo of type Todo and return another function that willbe called by onChange
        setTodos((todos) => {
            return todos.map((todo) =>{
                if(todo.id === handledTodo.id) return {...todo, isComplete: e.target.checked}
                return todo;
            })        
        }               
        );
        setTodos((todos) => todos.sort((a, b) => Number(a.isComplete) - Number(b.isComplete)) )        
    };

    const handleItemDelete = (deleteTodo: Todo) => () => { //take a deleteTodo of type Todo and return another function that willbe called by onChange
        setTodos(todos => todos.filter(todo => todo.id !== deleteTodo.id));
    };

    const handleNewItemName = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        console.log(e.target.value)
        setNewTodoName(e.target.value)
    };

    const handleSaveItem = (e: React.MouseEvent) => {
        setTodos((todos) => [...todos, {name: newTodoName, isComplete: false, id: nanoid(), date: new Date()}]);
        setNewTodoName('');
        setTodos((todos) => todos.sort((a, b) => Number(a.isComplete) - Number(b.isComplete)) ) 
    };

    const api = {
        todos,
        setTodos,
        newTodoName, 
        setNewTodoName,
        handleCheckBoxChange,
        handleItemDelete,
        handleNewItemName,
        handleSaveItem,
    }

    return api;
}

export default useTodoStore;
//I want to access this api in any part of the three and have access to the same data. Isoliting all data
//operation here and call it from a component lead to duplicate data, becouse here we have local state of the world drawn
//from localStorage and used internally in the component that will not be update if another component modify the data
//How to call it anywhere from our component tree?
//We use Context and Provider to instantiate this service up in the component tree and use it down the component three
//sharing the same view of the world