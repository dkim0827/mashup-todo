import { useState, memo } from 'react';
import './TodoCreate.css';
import cn from 'classnames';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../../TodoContext';

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text,
        done: false,
      },
    });
    nextId.current += 1;
    setText('');
  };

  return (
    <>
      {open && (
        <div className="insert__template">
          <form className="insert__form" onSubmit={onSubmit}>
            <input
              className="insert__input"
              type="text"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
      )}
      <button className={cn('circleButton', open && 'open')} onClick={onToggle}>
        <MdAdd />
      </button>
    </>
  );
}

export default memo(TodoCreate);
