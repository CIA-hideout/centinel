import * as types from '../constants/action-types';

export const initAppState = () => ({
  type: types.INIT_APP_STATE,
});

export const rehydrateApp = () => ({
  type: types.REHYDRATION_COMPLETED,
});
