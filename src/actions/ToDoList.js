import { ADD, DELETE, CHANGE, ERROR } from './types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const ToDoList = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log('FUCK ME FUCK ME FUCK ME', props);
  return (
    <div>
      {todo}
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={() => props.addTodo}>ADD</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: ADD }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
