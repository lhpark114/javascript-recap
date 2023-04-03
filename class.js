class Car {constructor(brand, name, color){
    this.brand = brand;
    this.name = name;
    this.color = color; }

drive(){
        console.log(this.name + '가 운전을 시작합니다.');
    }
}

let avante = new Car('hyundai', 'avante', 'black')
    console.log(avante.color); // 'black'
    console.log(avante.drive()); // avante가 운전을 시작합니다.


class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

console.log(Animal.generateName());




class Person{
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
    }

    sum(){
        return (this.first + this.second);
    }
} 

class Person2 extends Person{
 // override Person
    constructor(name, first, second, third){
        super(name, first, second); // Takes Parents properties
        this.third = third;
    }
    
    sum(){
     // Takes Parents properties
        // but want to override parents' method
        return super.sum() + this.third; 
    }
}

const kim = new Person2('kim', 10, 20, 30);
console.log(kim.sum()); // 60