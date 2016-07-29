import { expenseTypes } from '../constants/enums';

const expenseTypeIdToStr = (id) => (
  expenseTypes.find(expense => expense.id === id).name
);
