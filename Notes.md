# Notes 

### Interfaces 
- General straregy for reusable code in TS is create function with arguments that are typed with interfaces.
- Object/Classes can decide to implement a given interface to work with a function.
- Typescript automatically tries to figure out what type of value a variable refers to
- Interfaces also can be extend from other interfaces.
- Interfaces describes functions, arrays, objects.
- Interfaces can also extentiate class.
  
### Classes
- Class is a blueprint to create an object with some fields and methods to represent a thing
- Classes has controls over who can see methods and variables.
- `extends` inherites all things from class `Vehical`
- default `modifier` of any method or variables is `public`.
- `public` can be called everywhere, anytime.
- `private` can be called by other methods in the class.
- `protected` can be called by other methods in current class or other methods of child clsses.

  
### Type aliases
- More flexible than interfaces.
- It's just allowing the compiler that what values of datatypes are allowed to be in variable.
- It'll allow us to give a type name.

### Generics
- Generics offer a way to create reusable components. Generics provide a way to make components work with any data type and not restrict to one data type. So, components can be called or used with a variety of data types.
- these are the types in class/functions.
- allow us to defines type of property, argument, return type at future point.
- use in resusable of code.

### Top & Bottom types 
- There are two types of `Top` types.
- One is `any` and second one is `unknown`.
- `any` has no checks on nodes in object type.
- `unknown` can be use when it's needs to be private.
- There is one only type in `Bottom` types.
- `never` it holds no values.
  
