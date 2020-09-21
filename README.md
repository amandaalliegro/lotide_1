# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amanda.arnaut/lotide`

**Require it:**

`const _ = require('@amanda.arnaut/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: assertion function which compares two values and prints out a successful or failure message;
* `assertArraysEqual(...)`: While the assertEqual is great at comparing primitive types (like numbers and strings), this function asserts if two arrays are equal;
* `eqArrays(...)`: easily compare arrays;
* `head(...)`: retrieve the first element from the array;
* `tail(...)`: return every element except the head (first element) of the array;
* `middle(...)`: The middle function should return an array with only the middle element(s) of the provided array.