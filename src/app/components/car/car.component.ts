import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public car = {
    carName: 'Audi rs5',
    carMileage: 100,
    fuel: 50,
    currentFuel: 50,
    carDescr: ['Двигатель 2 литра', 'максимальная скорость 200 км/ч' ]
  };
  public isVisible = false;
  constructor() {}

  public drive(e: Event): void {
    if (this.car.currentFuel <= 0) {
      this.isVisible = true;
    } else {
      this.car.carMileage += 10;
      this.car.currentFuel -= 5;
    }
  }

  public refuel(e: Event): void {
    this.car.currentFuel += this.car.fuel;
    this.isVisible = false;
  }

}


