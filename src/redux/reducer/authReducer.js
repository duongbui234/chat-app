import { authActionType } from '../type/authActionType';

const defaultState = {
  user: null,
  isChecking: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case authActionType.AUTH_ON_INIT:
      return {
        user: null,
        isChecking: true,
      };
    case authActionType.AUTH_ON_SUCCESS:
      return {
        user: action.payload,
        isChecking: false,
      };
    case authActionType.AUTH_ON_ERROR:
      return {
        user: null,
        isChecking: false,
      };
    default:
      return state;
  }
};
