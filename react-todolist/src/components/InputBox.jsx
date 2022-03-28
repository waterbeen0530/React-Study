import React, { useRef, useState } from 'react';

const InputBox = ({ todoList, setTodoList }) => { 
  const [text, setText] = useState(''); 
  const inputRef = useRef(null); 
  
  const onChangeInput = (e) => { 
    setText(e.target.value);
  };

  const onClickAddButton = () => { 
    const nextTodoList =todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(nextTodoList);

    setText('');
    inputRef.current.focus(); 
    }; 
    
    return ( 
    <div className="todoapp__inputbox"> 
      <input type="text" 
        name="todoItem" 
        value={text} 
        ref={inputRef} 
        placeholder="할 일을 입력해주세요" 
        className="todoapp__inputbox-inp" 
        onChange={onChangeInput} 
      /> 
      <button 
        type="submit" 
        className="todoapp__inputbox-add-btn" 
        onClick={onClickAddButton}> 
          추가 
      </button> 
    </div> 
  ); 
};

export default InputBox;
