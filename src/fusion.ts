import { Car } from "./car";

export class Fusion extends Car {
  constructor(year: number) {
    super(year);
  }

  turnOnTurbo(): void {
    this.velocity += 100;
  }

  definirCaracteristicas(color: string): void {
    this.color = color
  }
}
