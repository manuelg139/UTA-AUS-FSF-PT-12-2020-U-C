// TODO: Import the parent class
const vehicle = require('./vehicle');

// TODO: Create a `Car` class that extends the `Vehicle` class

class car extends vehicle{
  constructor(id, color, passanger){
    super(id,4, 'beep');
    this.color= color;
    this.passanger = passanger;

  }

  useHorn(){
    console.log(this.sound);
  }

  checkPassengers(){
    if (this.passanger.lenght > 4){
      console.log(
        'This car only seats 4 people. You have too many passangers'
      );
    } else {
      console.log(
        `You ahve room for ${4 - this.passanger.lenght} `
      );
    }
  }

}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
