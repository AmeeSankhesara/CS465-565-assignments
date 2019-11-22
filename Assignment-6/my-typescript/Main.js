"use strict";
exports.__esModule = true;
var Codelab_1 = require("./Codelab");
// Use this file for reference.
var guests = [
    {
        coming: true,
        name: "Sir Isaac Newton"
    },
    {
        coming: true,
        name: "Marie Curie"
    },
    {
        coming: true,
        name: "Albert Einstein"
    },
    {
        coming: false,
        name: "Charles Darwin"
    }
];
var codelab = new Codelab_1.Codelab(guests);
// Angular is so much better than this:
// console.log(codelab.getGuestsComing().map((guest: Guest) => `${guest.name}`).join('\n'))
document.body.innerHTML = '<ul>' +
    codelab.getGuestsComing().map(function (guest) { return "<li>" + guest.name + "</li>"; }).join('') +
    '</ul>';
