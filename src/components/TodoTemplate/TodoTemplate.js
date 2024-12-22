import React from 'react';
import './TodoTemplate.css';
import TodoTemplateBlock from './TodoTemplateBlock';

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
