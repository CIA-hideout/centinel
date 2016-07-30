import * as types from '../constants/action-types';

/**
 * selectedUser attributes
 * @attr 
 */

const selectedUser = (state = {}, action) => {
  switch (action.type) {
    case types.SIGN_UP_USER:
      return action.data;

    default:
      return state;
  }
};

export default selectedUser;

export const getSelectedUser = (state) => state.selectedUser;
