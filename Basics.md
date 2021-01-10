# Basics

### What is Typescript 
- Typescript is just a type system.
- We're just writing javascript code including types.
- Browser don't understand typescript.

### Why we're using it?
- Helps us to catch errors during development.
- Adding type annotation for analyze the code.

### How typescript works in development?
- Typescript code that we written will compile by a  Typescript compiler and convert it to javascript. 
- [Here is package we're using for compilation](https://www.npmjs.com/package/ts-node) 


### Notes:
- No effects of how our code is getting executed.
- There is no performance optimization in any logic we made.

## Types

- There are two types of Types in typescript
    - Primitive types
        - number
        - boolean
        - void
        - undefined
        - string
        - symbol
        - null
    - Object types
        - functions
        - arrays
        - classes
        - objects

### Annotations

- It's a code, we can tell typescript what type of value a variable will refer to

### Interface

- Typescript automatically tries to figure out what type of value a variable refers to

### Typescript examples

```typescript
// number
let grapes: number = 12;
// string
let name: string = "John Doe";
// boolean
let hasValue: boolean = true;
// null
let isnull: null = null;
// undefined
let isundefined: undefined = undefined;
// Date
let now: Date = new Date(); 
// Array
let cart: string[] = ['apples', 'grapes', 'toothbrush'];
// Function
let newFunction: void = (i: number) => {
    console.log(i)
    // not returning anything
}
```





