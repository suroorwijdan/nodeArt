#! /usr/bin/env node

/*
 * nodeArt
 * https://github.com/suroorwijdan/nodeArt
 *
 * Copyright (c) 2013 Suroor Wijdan
 * Licensed under the MIT license.
 */

'use strict';

var asciimo = require('asciimo').Figlet;
var colors = require('colors');
var sys = require("sys");
var fontPath = __dirname + "/../node_modules/asciimo/fonts/";

//Get the sliced array of arguments passed from command line
var userArgs = process.argv.slice(2);

//Get the first argument i.e., text
var text = userArgs[0];

//If second argument is provided i.e., font then assign it else take default Whimsy.
var font = userArgs[1]? userArgs[1] : 'Whimsy';

//Check if font exists
require("fs").readFile(fontPath + font + ".flf", "utf-8", function(err, contents) {
    if (err) {
        sys.puts(font.red.underline.italic.bold + " font file not found, Check the docs to find the list of available fonts!".red.bold);
    }
    else {
        printASCIIArt();
    }
});


function printASCIIArt() {
    asciimo.write(text, font, function(art){
        console.log(art.blue);
    });
}





