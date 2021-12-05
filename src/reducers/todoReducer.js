import React from 'react';
import { ADD, DELETE, CHANGE, ERROR } from '../actions/types';

const INITIAL_STATE = {
  list: '',
  errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { ...state, list: action.payload };
    case DELETE:
      return { ...state, list: '' };
    case ERROR:
      return { ...state, errorMessage: action.payload };
    case CHANGE:
      return;
    default:
      return state;
  }
}
