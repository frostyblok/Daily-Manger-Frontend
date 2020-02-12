import axios from '../utils/axiosInstance';
import {GET_ALL_ACTIVITIES, ACTIVITIES_ERROR, CREATE_ACTIVITY, GET_ONE_ACTIVITY} from './types';
import { loaderAction } from './auth';

const allActivitiesAction = activities => ({ type: GET_ALL_ACTIVITIES, activities });
const createActivityAction = activity => ({ type: CREATE_ACTIVITY, activity });
const getOneActivityAction = activity => ({ type: GET_ONE_ACTIVITY, activity });
const activitiesError = message => ({ type: ACTIVITIES_ERROR, message });

export const allActivities = () => async (dispatch) => {
  dispatch(loaderAction(true));
  try {
    const { data } = await axios.get('/todos');
    dispatch(allActivitiesAction(data));
    dispatch(loaderAction(false));
  } catch ({message}) {
    dispatch(activitiesError(message));
    dispatch(loaderAction(false));
  }
};

export const createActivity = title => async (dispatch) => {
  dispatch(loaderAction(true));
  try {
    const { data } = await axios.post('/todos', {title});
    dispatch(createActivityAction(data));
    dispatch(loaderAction(false));
  } catch ({message}) {
    dispatch(activitiesError(message));
    dispatch(loaderAction(false));
  }
};

export const getActivity = id => async (dispatch) => {
  dispatch(loaderAction(true));
  try {
    const { data } = await axios.get(`/todos/${id}`);
    dispatch(getOneActivityAction(data));
  } catch ({message}) {
    dispatch(activitiesError(message));
    dispatch(loaderAction(false));
  }
};
