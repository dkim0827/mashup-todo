import './TodoHead.css';
import { useTodoState } from '../../TodoContext';

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos?.filter((todo) => !todo.done).length || 0;

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <div className="todo__headblock">
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks__left">할 일 {undoneTasks}개 남음</div>
    </div>
  );
}

export default TodoHead;
