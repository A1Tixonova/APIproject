import { ADD } from './types';

export const addTodo = (state, action) => {
  state.push(action.payload);
  return state;
};
