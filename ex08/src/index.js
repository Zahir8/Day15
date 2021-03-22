const sum = (num1, num2 , defaultParam = 1) => {
    if (num2 === undefined) {
        return num1 + defaultParam;
    }
    return num1 + num2;
}
console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;