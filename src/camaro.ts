import { Car } from "./car";

export class Camaro extends Car {
  constructor(year: number) {
    super(year);
  }

  turnOnTurbo(): void {
    this.velocity += 300;
  }
}
