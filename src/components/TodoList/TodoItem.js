import { useState, memo } from 'react';
import cn from 'classnames';
import { MdDone, MdDelete, MdEdit, MdSave } from 'react-icons/md';
import { useTodoDispatch } from '../../TodoContext';

function TodoItem({ todo }) {
  const [text, setText] = useState(todo.text);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useTodoDispatch();
  const { id, done } = todo;

  const onToggleTodo = () =>
    dispatch({
      type: 'TOGGLE',
      id,
    });

  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id,
    });

  const onEdit = () => {
    setIsUpdate(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE',
      nextTodo: {
        ...todo,
        text,
      },
    });
    setIsUpdate(false);
  };

  return (
    <div className="todo__itemblock">
      <div
        className={cn('todo__checkcircle', done && 'done')}
        onClick={() => onToggleTodo()}
      >
        {done && <MdDone />}
      </div>

      <div className={cn('todo__text', done && 'done')}>
        {isUpdate ? (
          <form onSubmit={onSave}>
            <input
              className="insert__input"
              type="text"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        ) : (
          text
        )}
      </div>
      {isUpdate && (
        <div className={cn('todo__remove', 'todo__update')} onClick={onSave}>
          <MdSave />
        </div>
      )}
      {!isUpdate && (
        <div className="todo__remove" onClick={onEdit}>
          <MdEdit />
        </div>
      )}
      <div
        className={cn('todo__remove', isUpdate && 'todo__update')}
        onClick={() => onRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default memo(TodoItem);
