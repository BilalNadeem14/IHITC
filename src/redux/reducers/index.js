import { combineReducers } from 'redux'
import LoadingReducer from './LoadingReducer'
import authReducer from './authReducer'
// import { reducer as network } from 'react-native-offline';
import offlineReducer from './offlineReducer';


export default combineReducers({
    LoadingReducer: LoadingReducer,
    authReducer: authReducer,
    offlineReducer: offlineReducer,
    // network
})