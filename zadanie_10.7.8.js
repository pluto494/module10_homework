let myMap = new Map();
myMap.set("x", "y");
myMap.set("2x", "2y");
myMap.set("3x", "3y");

for (let elem of myMap) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}