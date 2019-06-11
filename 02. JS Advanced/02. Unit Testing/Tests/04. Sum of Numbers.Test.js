let assert = require("chai").assert;
let sum = require("../04. Sum of Numbers");

describe("sum array of numbers", function () {

    it("should return correct sum", function () {
        let arr = [1, 2, 3];

        let expected = 6;
        let actual = sum(arr);

        assert.equal(actual, expected, "error");
    });

    it("should return 0 when empty array is given", function () {
        let arr = [];

        let expected = 0;

        assert.equal(sum(arr), expected, "Empty array");
    });

    it("should return NaN if not numbers are given", function () {
        let arr = ["one", "two", "three"];

        assert.isNaN(sum(arr), "NaN error");
    });

});
