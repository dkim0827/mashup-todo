import './TodoList.css';
import TodoItem from './TodoItem';
import { useTodoState } from '../../TodoContext';

function TodoList() {
  const todos = useTodoState();

  return (
    <div className="todo__listblock">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
