import callApi from '../utils/call-api';

// Examples:
//
export const getSomething = () => callApi('/something', { method: 'GET' });
// export const postSomething = body => callApi("/something", { method: "POST", body });
// export const putSomething = (id, body) => callApi(`/something/${id}`, { method: "PUT" });
// export const deleteSomething = id => callApi(`/something/${id}`, { method: "DELETE" });
