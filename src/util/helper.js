import { expenseTypes } from '../constants/enums';

export const expenseTypeIdToStr = (id) => (
  expenseTypes.find(expense => expense.id === id).name
);

export const parseFloatToDp = (num, decimalPlaces) => (
  parseFloat(Math.round(num * 100) / 100).toFixed(decimalPlaces)
);

