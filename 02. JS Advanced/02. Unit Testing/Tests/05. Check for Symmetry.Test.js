let assert = require("chai").assert;
let isSymmetric = require("../05. Check for Symmetry");

describe("Check array for symmetry", function () {

    it("should return true when symmetric array is given", function () {
        let arr = ["one", "two", "one"];

        let actual = isSymmetric(arr);
        let expected = true;

        assert.equal(actual, expected);
    });

    it("should return false when not-array is given", function () {
        let obj = {};

        let actual = isSymmetric(obj);
        let expected = false;

        assert.equal(actual, expected)
    });

    it("should return false if array is not symmetric", function () {
        let arr = ["one", "two", "three"];

        let actual = isSymmetric(arr);
        let expected = false;

        assert.equal(actual, expected);
    });

    it("should return true if there is only 1 element in the array", function () {
        let arr = ["one"];

        let actual = isSymmetric(arr);
        let expected = true;

        assert.equal(actual, expected);
    });

    it("should return true if array is empty", function () {
        let arr = [];

        let actual = isSymmetric(arr);
        let expected = true;

        assert.equal(actual, expected);
    });

    it("should return true if array contains different type elements but is symmetric", function () {
        let arr = ["one", 1, {one: 1}, new Date(), [], new Date(), {one: 1}, 1, "one"];

        let actual = isSymmetric(arr);
        let expected = true;

        assert.equal(actual, expected);
    });
});