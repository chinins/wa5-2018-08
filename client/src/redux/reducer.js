import * as Actions from './actions';

const defaultState = {
  topics: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Actions.SET_TOPICS: {
      return {
        ...state,
        topics: action.topics
      }
    }
  }

  return state;
};