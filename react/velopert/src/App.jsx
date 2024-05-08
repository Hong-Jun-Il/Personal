import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <TodoProvider>
    <GlobalStyles />
    <TodoTemplateBlock>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplateBlock>
    </TodoProvider>
  );
};

export default App;
