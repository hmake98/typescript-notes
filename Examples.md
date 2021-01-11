# Examples

### Array examples
- Try to initialize type to array whenever it create.
- Never assign type `any` to array in case of initialization.
  
```typescript 
const cars: string[] = ['toyota', 'ford', 'ferrari']
```

### Multiple array types
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
- `extends` inherites all things from class `Vehical`
- default `modifier` of any method or variables is `public`.
- `public` can be called everywhere, anytime.
- `private` can be called by other methods in the class.
- `protected` can be called by other methods in current class or other methods of child clsses.
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



