class Vehicle {
    constructor(model){
      this.model = model
    }
    drive(){
      return this.model + " " + "drives"
    }
  }
            

  
class Sedan extends Vehicle{
    constructor(){}
}  

class SUV extends Vehicle{
    constructor(){}
} 

class Truck extends Vehicle{
    constructor(){}
} 