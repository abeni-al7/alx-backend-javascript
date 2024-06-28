const cloneSymbol = Symbol('clone');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this[cloneSymbol]();
  }

  static [cloneSymbol]() {
    return new this();
  }
}
