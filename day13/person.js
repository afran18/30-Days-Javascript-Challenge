// person.js

exports.person = {
    name: 'John Doe',
    age: 22,
    
    greet: function(name) {
        if (name) {
            this.name = name;
        }
        console.log(`Hello, my name is ${this.name}.`);
    },

    birthday: function() {
        this.age += 1;
        console.log(`I am now ${this.age} years old.`);
    }
};

// module.exports = person;
