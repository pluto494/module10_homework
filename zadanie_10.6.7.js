const array = [1,3,4,5,"1,2","ab",null,0,NaN,68];
array.forEach((elem) => {
    if (typeof elem === "number" && isFinite(elem)) {
        if (elem == 0) {
            console.log("0" + " :ZERO!");
        } else if (elem % 2 == 0) {
            console.log(elem + " :EVEN!");
        } else {
            console.log(elem + " :NOT EVEN!");
        }
    }
});