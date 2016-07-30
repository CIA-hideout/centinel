import * as types from '../constants/action-types';

/**
 * selectedUser attributes
 * name {String}
 * password {String}
 * salary {Number}
 * monthly expenditures {Array}
 * milestone {Object}
 */

const selectedUserInitState = {
  dailyBudget: 0,
  milestone: {
    item: '',
    cost: '',
  },
  monthlyExpenditures: [],
  name: '',
  password: '',
  salary: '',
};

const selectedUser = (state = selectedUserInitState, action) => {
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
    
    case types.SAVE_DAILY_BUDGET:
      return { ...state,
        dailyBudget: action.data,
      };

    case types.SAVE_MILESTONE:
      return { ...state,
        milestone: action.data,
      };

    default:
      return state;
  }
};

export default selectedUser;

export const getSelectedUser = (state) => state.selectedUser;
