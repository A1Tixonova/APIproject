import { ADD, DELETE, CHANGE, ERROR } from './types';
import React, { useState } from 'react';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const testMessage = 'qweqweqeqwe';
  return (
    <div>
      {list}
      <input />
      <button onClick={() => setList(testMessage)}>ADD</button>
      <button>CHANGE</button>
      <button>DELETE</button>
    </div>
  );
};

export default ToDoList;
