import { createAction } from '../../utils/action-helpers';

export const ADD_SOMETHING = 'ADD_SOMETHING';
export const addSomething = createAction(ADD_SOMETHING);

export const REMOVE_SOMETHING = 'REMOVE_SOMETHING';
export const removeSomething = createAction(REMOVE_SOMETHING);

export const EDIT_SOMETHING = 'EDIT_SOMETHING';
export const editSomething = createAction(EDIT_SOMETHING);
