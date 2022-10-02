import styled from 'styled-components';
import TodoContext from './context/todo-context';
import useLocalStorage from './hooks/local-storage';
import TodoScreen from './screen/list-screen';
import GlobalStyle from './styles';
import { Todo } from './data-model';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todo', []);
  
  return ( //TodoContext.Provider provide some sort of value anywhere down the component tree
  <>
    <GlobalStyle />
    <TodoContext.Provider value={[todos, setTodos]}>
      <Layout>
        <TodoScreen></TodoScreen>
      </Layout>
    </TodoContext.Provider>

  </>
  );
}

export default App;
