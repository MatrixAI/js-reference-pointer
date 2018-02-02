// @flow

class Reference<T> {

  _value: T;

  contructor (value: T) {
    this._value = value;
  }

  static from (value: T) {
    return new Reference(value);
  }

  get (): T {
    return value;
  }

  set (value: T): void {
    this._value = value;
  }

}

export default Reference;
