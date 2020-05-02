(function(){
    "use strict";
    String.prototype.filter = function(word){
        return this.replace(word, "");
    };

    console.log("Exercise 1:--> \"This house is not nice!\".filter('not')")
    console.log("This house is not nice!".filter('not'));

    Object.prototype.bubbleSort = function() {
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < this.length; j++) {
                if (arr[i] > arr[j]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
        return arr;
    };

    let arr = [16, 0, -6, 3, 5, 4, -3, 5, 6, -8, 6];
    console.log("Exercise 2:--> [16, 0, -6, 3, 5, 4, -3, 5, 6, -8, 6].bubbleSort();")
    console.log(arr.bubbleSort());


    var Person = function() {};
    Person.prototype.initialize = function(name, age){
        this.name = name;
        this.age = age;
    }

    Person.prototype.describe = function() {
        return this.name + "," + this.age + " years old.";
    }

    var Student = function() {};
    Student.prototype = new Person();

    Student.prototype.learn = function(subject){
        return this.name + " just learned " + subject;
    }

    var me = new Student();

    me.initialize("Sara", 25);
    me.learn("WAP");

    var Teacher = function() {};
    Teacher.prototype = new Person();

    Teacher.prototype.teach = function (subject) {
        return this.name + " is now teaching " + subject;
    }

    var teacher = new Teacher();

    teacher.initialize("Sarankhuu", 45);
    teacher.teach("WAP");

    describe("Student object:", function() {
        it("describe function", function () {
            assert.equal(me.describe(), "Sara,25 years old.");
        });
        it("learn function", function () {
            assert.equal(me.learn("WAP"), "Sara just learned WAP");
        });
    });

    describe("Teacher object:", function() {
        it("describe function", function () {
            assert.equal(teacher.describe(), "Sarankhuu,45 years old.");
        });
        it("teach function", function () {
            assert.equal(teacher.teach("WAP"), "Sarankhuu is now teaching WAP");
        });
    });
}());