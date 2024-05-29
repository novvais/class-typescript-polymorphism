export abstract class Car {
  year: number;
  velocity: number;
  color: string

  constructor(year: number) {
    this.year = year;
    this.velocity = 0;
    this.color = "Black"
  }

  acelelar() {
    this.velocity += 1
  }

  definirCaracteristicas(color: string): void {
    this.color = color
  }

  abstract turnOnTurbo(): void
}
