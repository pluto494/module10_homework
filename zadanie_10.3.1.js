value = prompt('Введите значение: ');

value = +value;

console.log(typeof value);

if (isNaN (value) === true) {
    alert('Oops! Wrong!');
} else if (value % 2 == 0) {
    alert('Even!');
} else {
    alert('Not even!');
}