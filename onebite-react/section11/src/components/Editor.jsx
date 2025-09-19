import { useState, useContext, useRef } from 'react';
import './Editor.css';
import { TodoDispatchContext } from '../App';

const Editer = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [value, setValue] = useState('');
  const contentRef = useRef();

  const onKeyDown = (e) => {
    // 13: enter key
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      onCreate(value);
      setValue('');
    }
    contentRef.current.focus();
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={value}
        type="text"
        placeholder="새로운 Todo..."
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editer;
