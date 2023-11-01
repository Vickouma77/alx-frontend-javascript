import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    [`income-${new Date().getFullYear()}`]: income,
    [`gdp-${new Date().getFullYear()}`]: gdp,
    [`capita-${new Date().getFullYear()}`]: capita,
  };
  return fullBudget;
}
