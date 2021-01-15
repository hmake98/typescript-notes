// example without interfaces
const car = {
    name: 'yaris',
    brand: 'toyota',
    broken: true,
    year: 2004,
    kms: 13432,
    user: 'john doe'
}

const viewDetails = (vehicle: { name: string, brand: string, broken: boolean, year: number, kms: number, user: string }) => {
    console.log(vehicle.name);
    console.log(vehicle.user);
    console.log(vehicle.kms);
};

viewDetails(car);


// example with interfaces 
interface Car {
    name: string;
    brand: string;
    broken: boolean;
    year: number;
    kms: number;
    user: string;
}

const viewDetailsNew = (car: Car) => {
    console.log(car.brand);
    console.log(car.user);
    console.log(car.kms);
}

const cardetail: Car = {
    name: 'yaris',
    brand: 'toyota',
    broken: true,
    year: 2004,
    kms: 13432,
    user: 'john doe'
}

viewDetailsNew(cardetail)

// importent use
interface Reportable {
    summary(): string;
}

const newCar = {
    name: 'yaris',
    brand: 'toyota',
    broken: true,
    summary(): string {
        return `Summary: ${this.name} + ${this.brand} + is ${this.broken ? 'borken' : 'not broken'}`
    }
}

const drink = {
    color: 'black',
    name: 'cola',
    summary(): string {
        return `Summary: ${this.name} + ${this.color}`
    }
}

const printSummary = (item: Reportable) => {
    console.log(item.summary())
}

printSummary(newCar);
printSummary(drink);

// conclusion : can use single interface for multiple function arguments. 


