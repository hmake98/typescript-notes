# Examples

### Array examples  
```typescript 
const cars: string[] = ['toyota', 'ford', 'ferrari']
```

### Multiple array union types
- Can use `|` for multiple type init.

```typescript
const myArr: string | number = ['one', 1]
```

## Tuples
```typescript
const apple = {
    color: 'red',
    isFresh: true,
    quantity: 1
}

const apple: [string, boolean, number] = ['red', true, 1]
```

## Interface 
```typescript
interface Car {
    name: string;
    brand: string;
    isOld: true;
    horsePower: number;
    user: User;
    summary(): string;
}

interface User {
    name: string;
    email: string;
    age: number;
}

const car: Car = {
    name: 'figo',
    brand: 'ford',
    isOld: true,
    horsePower: 73,
    user: {
        name: 'kevin dey',
        email: 'kevin.d.test@gmail.com',
        age: 34
    },
    summary(): string => {
        return this.name
    }
}

const getVehical = (vehical: Car) => {
    console.log(vehical);
}
```

## Classes
```typescript
class Vehical {
    drive(): void => {
        console.log('driving');
    }

    beep(): void => {
        console.log('beeping');
    }
}

class Car extends Vehical {
    drive(): void {
        console.log('boom! there you go')
    }
}

const car = new Car();
car.beep();
car.drive();
```

```typescript
interface HasEmail {
    email: string;
    name: string;
}

export class Contact implements HasEmail {
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

```

## Type aliases
```typescript 
type stringOrNumber = string | number;
type hasName = { name: stirng };
// in this, hasName could also contains other values. it won't give you error if you added one for variable in it.

type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> {}
const x: NumVal = [1,2,3,4,5,6,7,8,[1,2,3,4,5]];
```

## Generic Types 
- See generic type examples in generic.ts file into repo.






