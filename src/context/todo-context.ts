import { createContext, Dispatch, SetStateAction } from "react";
import {Todo} from "../data-model";

const TodoContext = createContext<[Todo[], Dispatch<SetStateAction<Todo[]>>]>([[], () => {}]);

export default TodoContext;