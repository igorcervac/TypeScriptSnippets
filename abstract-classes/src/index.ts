abstract class Vehicle {
    constructor(private brand: string, private model: string) {
        
    }
    abstract drive():void;
}

class Motocycle extends Vehicle {
    constructor(brand: string, model: string){
        super(brand, model);
    }

    drive(): void {
        console.log('Driving a motorcycle');
    }
}

class Car extends Vehicle {
    constructor(brand: string, model: string){
        super(model, brand);
    }
    drive(): void{
        console.log('Driving a car');
    }
}

const vehicles: Vehicle[] = [new Motocycle('Suzuki', 'Hayabusa'), new Car('Toyota', 'Corolla')];
for (let v of vehicles){
    v.drive();
}