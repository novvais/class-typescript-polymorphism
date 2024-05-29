import { Car } from "./car";

export class TestCar {
  car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  testTurbo() {
    this.car.turnOnTurbo();
  }
}
