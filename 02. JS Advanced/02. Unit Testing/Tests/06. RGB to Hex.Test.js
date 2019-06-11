let assert = require("chai").assert;
let rgbToHex = require("../06. RGB to Hex");

describe("Test RGB to Hex function", function () {

    it('should return undefined if red is out of range', function () {
        let red = -100;
        let green = 50;
        let blue = 50;

        let result = rgbToHex(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined if green is out of range', function () {
        let red = 50;
        let green = -100;
        let blue = 50;

        let result = rgbToHex(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined if blue is out of range', function () {
        let red = 50;
        let green = 50;
        let blue = -100;

        let result = rgbToHex(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined if invalid parameters are passed', function () {
        
    });

    it('should ', function () {

    });

});