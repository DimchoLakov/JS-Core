let add = (function () {
    let sum = 0;

    function add(number) {
        sum += number;
        return add;
    }

    add.toString = () => sum;

    return add;

})();


console.log(add(2)(20)(55)(1921)(30));

