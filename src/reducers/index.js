import { combineReducers } from 'redux';
import authReducer from './authReducer'
import activitiesReducer from './activityReducer';

const rootReducer = combineReducers({
  currentUser: authReducer,
  activities: activitiesReducer
});

export default rootReducer;