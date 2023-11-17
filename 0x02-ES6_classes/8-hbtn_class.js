/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('size must be a number');
    } else {
      this._size = size;
    }

    if (typeof location !== 'string') {
      throw TypeError('location must be a string');
    } else {
      this._location = location;
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
