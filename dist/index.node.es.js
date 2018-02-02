class Reference {

  constructor(value) {
    this._value = value;
  }

  static from(value) {
    return new Reference(value);
  }

  get() {
    return this._value;
  }

  set(value) {
    this._value = value;
  }

}

export default Reference;
