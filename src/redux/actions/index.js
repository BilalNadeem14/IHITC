import api from "../../Api";
import { endpoints } from "../../Api/configs";
import types from "./actionTypes";

const setImage = (image) => {
  console.log('setImage action: ', image);
  return { type: types.SET_IMAGE, payload: image };
};

const signup = (data, callback, error) => {
  console.log('action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.signup, data, true);
      // console.log('signup action: ', response);
      // callback(response)
      dispatch({ type: types.SIGN_UP, payload: data });
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      callback('signup successfull');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      error(e);
    }
  };
};


const login = (data, callback) => {
  console.log('login action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.post('login_patient_portal', data);
      console.log('response in login action: ', response);
      dispatch({ type: types.LOGIN });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in login action: ', e);
      return Promise.reject(e);
    }
  };
};


const TestResults = (data, callback) => {
  console.log('TestResults action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.TestReults, data);
      console.log('response in TestResults action: ', response);
      // dispatch({ type: types.TestResults });
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in TestResults action: ', e);
      return Promise.reject(e);
    }
  };
};

const ResultDetails = (data, callback) => {
  console.log('ResultDetails action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.ResultDetails, data);
      console.log('response in ResultDetails action: ', response);
      // dispatch({ type: types.ResultDetails });
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in ResultDetails action: ', e);
      return Promise.reject(e);
    }
  };
};

const logout = () => {
  return async dispatch => {
    dispatch({ type: types.LOGOUT })
  }
}

const registerPatient = (data, callback) => {
  // const newData = {...data, device_id: 'testtoken'};
  console.log('registerPatient action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      const response = await api.get(endpoints.registerPatient, data) //(endpoints.auth.login, newData, false);
      console.log('response in registerPatient action: ', response);
      // dispatch({type: types.LOGIN, payload: response}); //payload: data
      // setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response); //'login successful'
    } catch (e) {
      // setTimeout(() =>{ }, 500)
      dispatch({ type: types.loaderOff })
      console.log('error response in registerPatient action: ', e);
      return Promise.reject(e);
    }
  };
};

const searchPatient = (data, callback) => {
  // const newData = {...data, device_id: 'testtoken'};
  console.log('searchPatient action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      const response = await api.get(endpoints.searchPatient, data) //(endpoints.auth.login, newData, false);
      console.log('response in searchPatient action: ', response);
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      // setTimeout(() =>{ }, 500)
      dispatch({ type: types.loaderOff })
      console.log('error response in searchPatient action: ', e);
      return Promise.reject(e);
    }
  };
};

const saveAdditionalInfo = (data) => {
  // const newData = {...data, device_id: 'testtoken'};
  console.log('saveAdditionalInfo action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      const response = await api.get(endpoints.saveAdditionalInfo, data) //(endpoints.auth.login, newData, false);
      console.log('response in saveAdditionalInfo action: ', response);
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      // setTimeout(() =>{ }, 500)
      dispatch({ type: types.loaderOff })
      console.log('error response in saveAdditionalInfo action: ', e);
      return Promise.reject(e);
    }
  };
};

const saveLabOrder = (data) => {
  console.log('saveLabOrder action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.saveLabOrder, data) //(endpoints.auth.login, newData, false);
      console.log('response in saveLabOrder action: ', response);
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in saveLabOrder action: ', e);
      return Promise.reject(e);
    }
  };
};

const saveNotes = (data) => {
  console.log('saveNotes action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.saveNotes, data) //(endpoints.auth.login, newData, false);
      console.log('response in saveNotes action: ', response);
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in saveNotes action: ', e);
      return Promise.reject(e);
    }
  };
};

const saveDiagnosis = (data) => {
  console.log('saveDiagnosis action called', data);
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.get(endpoints.saveDiagnosis, data) //(endpoints.auth.login, newData, false);
      console.log('response in saveDiagnosis action: ', response);
      dispatch({ type: types.loaderOff })
      return Promise.resolve(response);
    } catch (e) {
      dispatch({ type: types.loaderOff })
      console.log('error response in saveDiagnosis action: ', e);
      return Promise.reject(e);
    }
  };
};

export const actions = {
  signup,
  login,
  TestResults,
  ResultDetails,
  // setImage,
  logout,
  // registerPatient,
  // searchPatient,
  // saveAdditionalInfo,
  // saveLabOrder,
  // saveNotes,
  // saveDiagnosis
}