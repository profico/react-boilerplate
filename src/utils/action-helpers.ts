// @ts-nocheck

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const ALL = 'ALL';

// helpers
export function action(type, payload) {
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export function createAction(type) {
  return (payload) => action(type, payload);
}

export function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export function createActionsFromTypes(actionTypes) {
  const res = {};
  Reflect.ownKeys(actionTypes).forEach((type) => {
    res[type.toLowerCase()] = createAction(actionTypes[type]);
  });
  return res;
}

// generates CRUD action types
export function createCrudTypes(base) {
  const res = {};
  [CREATE, READ, UPDATE, DELETE, ALL].forEach((type) => {
    res[type] = createRequestTypes(`${base}_${type}`);
  });
  return res;
}

// generates CRUD action creators:
export function createCrudActions(actionTypes) {
  const res = {};
  Reflect.ownKeys(actionTypes).forEach((type) => {
    res[type.toLowerCase()] = {};
    Reflect.ownKeys(actionTypes[type]).forEach((item) => {
      res[type.toLowerCase()][item.toLowerCase()] = createAction(actionTypes[type][item]);
    });
  });
  return res;
}
