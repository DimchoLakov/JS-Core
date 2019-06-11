let solution = (function () {
    let add = function add(x, y) {
        return [x[0] + y[0], x[1] + y[1]];
    };

    function multiply(x, scalar) {
        return [x[0] * scalar, x[1] * scalar];
    }

    function length(x) {
        return Math.sqrt(x[0] * x[0] + x[1] * x[1]);
    }

    function dot(x, y) {
        return x[0] * y[0] + x[1] * y[1];
    }

    function cross(x, y) {
        return x[0] * y[1] - x[1] * y[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]))