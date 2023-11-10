import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }

    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be a Currency');
    } else {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('currency must be a Currency');
    } else {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw TypeError('conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}
