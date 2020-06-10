import { ADD_SOMETHING, REMOVE_SOMETHING, EDIT_SOMETHING } from '../actions';

const initialState = {
  something: [],
};

function addSomething(state, action) {
  return {
    ...state,
    something: [...state.something, action.payload],
  };
}

function removeSomething(state, action) {
  return {
    ...state,
    something: [...state.something.slice(0, action.payload), ...state.something.slice(action.payload + 1)],
  };
}

function editSomething(state, action) {
  return {
    ...state,
    something: [
      ...state.something.slice(0, action.payload.index),
      action.payload,
      ...state.something.slice(action.payload.index + 1),
    ],
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SOMETHING:
      return addSomething(state, action);

    case REMOVE_SOMETHING:
      return removeSomething(state, action);

    case EDIT_SOMETHING:
      return editSomething(state, action);

    default:
      return state;
  }
}
