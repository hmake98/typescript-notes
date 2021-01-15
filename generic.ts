// Example 1
// Generic type simple example.
// You can pass T as a reference type of data.
// Then you can pass mutliple type of data as param.
class WorldNeedsVaccine<T> {
    constructor() {}

    printMyName<T>(name: T) {
        console.log(name)
    }
}

const myWorld = new WorldNeedsVaccine();

myWorld.printMyName(1);
myWorld.printMyName('John');
myWorld.printMyName(true);


// Example 2


