/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    } else {
      this._name = name;
    }

    if (typeof code !== 'string') {
      throw TypeError('code must be a string');
    } else {
      this._code = code;
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
