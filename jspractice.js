/*jshint esversion: 6  */

(function() {
    "use strict";

    function reverseArray(array){
        var newArr = [];
        for(let i = array.length-1; i>=0; i--){
            newArr.push(array[i]);
        }
        return newArr;
    }

    describe("reverseArray function", function() {
        it("input array[1,2,3,4,5], return would be [5,4,3,2,1]", function () {
            assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        });
        it("input array ['A','B','C'], return would be ['C','B','A']", function () {
            assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
        });
    });

    function reverseArrayInPlace(array){
        var index = 0;
        for(let i=array.length-1; i>=array.length/2; i--){
            var elem = array[i];
            array[i] = array[index];
            array[index] = elem;
            index ++;
        }
        return array;
    }

    describe("reverseArrayInPlace function", function() {
        it("input array[1,2,3,4,5], return would be [5,4,3,2,1]", function () {
            assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        });
        it("input array [\"A\", \"B\", \"C\"], return would be [\"C\", \"B\", \"A\"]", function () {
            assert.deepEqual(reverseArrayInPlace(["A", "B", "C"]), ["C", "B", "A"]);
        });
    });

    function arrayToList(array){
        var list = null;
        for(let i=array.length-1; i>=0; i--){
            list = {
                value:array[i],
                rest:list
            };
        }
        //console.log(list);
        return list;
    }

    describe("arrayToList function", function() {
        it("arrayToList([10, 20]) would be {value: 10, rest: {value: 20, rest: null}}", function () {
            assert.deepEqual(arrayToList([10,20]), {value: 10, rest: {value: 20, rest: null}});
        });
    });

    function listToArray(list){
        var array = [];

        for(var i = list; i; i = i.rest) {
            if ("value" in i)
                array.push(i.value);
        }
        //console.log(array);
        return array;
    }

    describe("listToArray function", function() {
        it("listToArray(arrayToList([10, 20, 30])) would be  [10, 20, 30]", function () {
            assert.deepEqual(listToArray(arrayToList([10, 20, 30])),  [10, 20, 30]);
        });

        it("listToArray({value: 10, rest: {value: 20, rest: null}}) would be  [10, 20]", function () {
            assert.deepEqual(listToArray({value: 10, rest: {value: 20, rest: null}}),  [10, 20]);
        });
    });

    function prepend(el, list){
        var newList = {};
        newList.value = el;
        newList.rest = list;
        return newList;
    }

    describe("prepend function", function() {
        it("prepend(10, prepend(20, null)) would be  {value: 10, rest: {value: 20, rest: null}}", function () {
            assert.deepEqual(prepend(10, prepend(20, null)),  {value: 10, rest: {value: 20, rest: null}});
        });
    });

    function nth(list, n){
        var index = 0;
        for(var i = list; i; i = i.rest) {
            if (index == n)
                return i.value;
            index ++;
        }
        return undefined;
    }

    describe("nth function", function() {
        it("nth(arrayToList([10, 20, 30]), 1) ->2 0", function () {
            assert.deepEqual(nth(arrayToList([10, 20, 30]), 1),  20);
        });
    });

    function deepEqual(val1, val2){
        if(val1 === val2)
            return true;

        if (val1 === null || typeof val1 !== "object" || val2 === null || typeof val2 !== "object") {
            return false;
        }

        let keysA = Object.keys(val1),
            keysB = Object.keys(val2);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(val1[key], val2[key])) {
                return false;
            }
        }
        return true;
    }

    describe("deepEqual function", function() {

        context("test case:", function() {
                let obj = {here: {is: "an"}, object: 2};

            it("deepEqual(obj, obj) -> true", function() {
                assert.equal(deepEqual(obj, obj), true);
            });

            it("deepEqual(obj, {here: 1, object: 2})) -> false", function() {
                assert.equal(deepEqual(obj, {here: 1, object: 2}), false);
            });

            it("deepEqual(obj, {here: {is: \"an\"}, object: 2}) -> true", function() {
                assert.equal(deepEqual(obj, {here: {is: "an"}, object: 2}), true);
            });
        });

    });
}());