'use strict';

const person={
    firstname:'Matt',
    lastname:'River',
    phone:'04012212121'
};

console.log(person.firstname);
console.log(person['lastname']);
console.log(person.lastname);

let greetings=`My name is ${person.lastname}, ${person.firstname} ${person.lastname}.`;
console.log(greetings);
