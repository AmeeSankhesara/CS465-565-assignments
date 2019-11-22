"use strict";
exports.__esModule = true;
var Puppy = /** @class */ (function () {
    function Puppy(name) {
        this.name = name;
    }
    Puppy.prototype.bark = function () {
        return 'Gav! my name is ' + this.name;
    };
    return Puppy;
}());
exports.Puppy = Puppy;
