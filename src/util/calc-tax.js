import { parseFloatToDp } from './helper';

const tableOfTax = {
  20000: 0,
  30000: 2,
  40000: 3.5,
  80000: 7,
  120000: 11.5,
  160000: 15,
  200000: 17,
  320000: 18,
  above320000: 20,
};

const taxPayableAtThatAmt = {
  30000: 200,
  40000: 550,
  80000: 3350,
  120000: 7950,
  160000: 13950,
  200000: 20750,
  320000: 42350,
};

// only taking from monthly income
const calcTax = (salary) => {
  const chargeableIncome = parseInt(salary, 10) * 12;
  console.log(chargeableIncome);

  let tax = 0;
  let previousKey = 0;
  let percentChargable = 0;

  Object.keys(tableOfTax).forEach(key => {
    if (chargeableIncome < 20000) {
      tax = 0;
    } else if (chargeableIncome > parseInt(previousKey, 10) && chargeableIncome < parseInt(key, 10)) {
      // find gross tax payable up to previousKey

      tax += taxPayableAtThatAmt[previousKey];

      // add tax calculated by percentage
      percentChargable = chargeableIncome - parseInt(previousKey, 10);
      tax += percentChargable * tableOfTax[key] / 100;

    } else if (chargeableIncome > 320000) {
      // too high
      percentChargable = chargeableIncome - 320000;
      tax = percentChargable * tableOfTax.above320000 / 100 + 42350;
    }

    previousKey = key;
  });

  return parseFloatToDp(tax, 2);
};

export default calcTax;