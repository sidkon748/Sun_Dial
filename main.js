// Define a class called "Car"
class Car {
    // Constructor to initialize the properties of the class
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Methods to display the details of the car, start the car, and stop the car
    displayInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    }
    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
    stop() {
      console.log(`${this.make} ${this.model} is stopping...`);
    }
  }
  
  // Define class "Garage" with empty array for car instances
  class Garage {
    constructor() {
      this.cars = []; 
    }
  
    // Method to add a car to the garage
    addCar(car) {
      this.cars.push(car);
      console.log(`${car.displayInfo()} has been added to the garage.`);
    }
  
    // Method to display all the cars in the garage
    displayCars() {
      console.log("Cars in the garage:");
      this.cars.forEach(car => {
        console.log(car.displayInfo());
      });
    }
  
    // Method to start all the cars in the garage
    startAllCars() {
      this.cars.forEach(car => {
        car.start();
      });
    }
  
    // Method to stop all the cars in the garage
    stopAllCars() {
      this.cars.forEach(car => {
        car.stop();
      });
    }
  }
  
  // Create instances of Car
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Ford', 'Mustang', 2022);
  const car3 = new Car('Honda', 'Civic', 2019);
  
  // Create a new instance of Garage
  const myGarage = new Garage();
  
  // Add 3 cars to garage
  myGarage.addCar(car1);
  myGarage.addCar(car2);
  myGarage.addCar(car3);
  
  // Display, start, and stop all cars in the garage
  myGarage.displayCars();
  myGarage.startAllCars();
  myGarage.stopAllCars();
  