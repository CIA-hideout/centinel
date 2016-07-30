import * as types from '../constants/action-types';

/**
 * selectedUser attributes
 * name {String}
 * password {String}
 * salary {Number}
 * monthly expenditures {Array}
 */

const selectedUser = (state = {}, action) => {
  switch (action.type) {
    case types.SIGN_UP_USER:
      return action.data;

    case types.SAVE_SALARY:
      return { ...state,
        salary: action.data,
      };

    case types.SAVE_MONTHLY_DEFAULT_EXPENDITURES:
      return { ...state,
        monthlyExpenditures: action.data,
      };

    default:
      return state;
  }
};

export default selectedUser;

export const getSelectedUser = (state) => state.selectedUser;
