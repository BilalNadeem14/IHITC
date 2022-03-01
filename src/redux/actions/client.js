import api from '../../Api';
import { endpoints } from '../../Api/configs';
import types from './actionTypes';

export const addClient = data => {
  console.log('addClient action called', data);
  return async dispatch => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.post(endpoints.addClient, data);
      console.log('response in add client action: ', response);
      dispatch({ type: types.loaderOff });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff });
      console.log('error response in add client action: ', e);
      return Promise.reject(e);
    }
  };
};

export const addClientPending = data => {
  console.log('addClient pending action called', data);
  return async dispatch => {
    try {
      const response = await api.post(endpoints.addClient, data);
      console.log('response in add client pending action: ', response);
      return Promise.resolve(response);
    } catch (e) {
      console.log('error response in add client pending action: ', e);
      return Promise.reject(e);
    }
  };
};

export const addVisitPending = data => {
  console.log('addVisit pending action called', data);
  return async dispatch => {
    try {
      const response = await api.post(endpoints.addVisit, data);
      console.log('response in add visit pending action: ', response);
      return Promise.resolve(response);
    } catch (e) {
      console.log('error response in add client pending action: ', e);
      return Promise.reject(e);
    }
  };
};

export const searchClients = data => {
  console.log('searchClients action called', data);
  return async dispatch => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.post(endpoints.searchClients, data);
      console.log('response in search clients action: ', response);
      dispatch({ type: types.loaderOff });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff });
      console.log('error response in add client action: ', e);
      return Promise.reject(e);
    }
  };
};

export const addVisit = data => {
  console.log('addVisit action called', data);
  return async dispatch => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.addVisit, data);
      // console.log('response in add visit action: ', response);
      dispatch({ type: types.loaderOff });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff });
      console.log('error response in add visit action: ', e);
      return Promise.reject(e);
    }
  };
};

export const viewDetails = data => {
  console.log('viewDetails action called', data);
  return async dispatch => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.post(endpoints.viewDetails, data);
      console.log('response in view details action: ', response);
      dispatch({ type: types.loaderOff });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff });
      console.log('error response in add visit action: ', e);
      return Promise.reject(e);
    }
  };
};
