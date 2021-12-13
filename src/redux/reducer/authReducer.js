import { authActionType } from '../type/authActionType';

const defaultState = {
  user: null,
  isChecking: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case authActionType.AUTH_LOGIN_INIT:
    case authActionType.AUTH_REGISTER_INIT:
      return {
        ...state,
        isChecking: true,
      };
    case authActionType.AUTH_LOGIN_SUCCESS:
    case authActionType.AUTH_REGISTER_SUCCESS:
      console.log('hello from reducer');
      return {
        ...state,
        user: action.payload,
      };
    case authActionType.AUTH_ON_INIT:
      return {
        user: null,
        isChecking: true,
      };
    case authActionType.AUTH_ON_SUCCESS:
      console.log('hello from reducer 2');
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
