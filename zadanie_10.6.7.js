const array = [1,3,4,5,"1,2","ab",null,0,NaN,68];
let even = 0, odd = 0, zero = 0;
array.forEach((elem) => {
    if (typeof elem === "number" && isFinite(elem)) {
        if (elem == 0) {
        	zero++;
            // console.log("0" + " :ZERO!");
        } else if (elem % 2 == 0) {
        	even++;
            // console.log(elem + " :EVEN!");
        } else {
        	odd++;
            // console.log(elem + " :NOT EVEN!");
        }
    }
});
console.log(`Zero elements: ${zero}, even elements: ${even}, odd elements: ${odd}`);

// Не совсем верно понято задание, нужно было вывести суммы элементов: сколько всего четных, нечетных и нулевых. Выше исправила на правильный вариант решения