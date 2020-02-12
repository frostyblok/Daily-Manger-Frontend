const initialState = {
  activitiesList: [],
  activity: {},
  loader: false
};

const activityReducer = (state = initialState, action) => {
  const { activity, activities, type, status } = action;
  switch(action.type) {
    case 'GET_ALL_ACTIVITIES':
      return {
        ...state,
        activitiesList: activities,
        type,
        loader: status
      };
    case 'CREATE_ACTIVITY':
      const { activitiesList } = state;
      activitiesList.push(activity);
      return {
        ...state,
        activitiesList,
        type,
        loader: status
      };
    case 'GET_ONE_ACTIVITY':
      return {
        ...state,
        activity: activity,
        type,
        loader: status
      };
    default:
      return state;
  }
};

export default activityReducer;
