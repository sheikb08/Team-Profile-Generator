# TeamProfile Generator

## Table of Contents
  - [Team Profile Generator](#teamprofile-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Contributors](#contributors)

## Description : 
I created a software engineering team generator command line application. The application prompts the user for information about the team manager proceed with inquires concerning the desired team members. The user can input any number of team members, and they may be a mix of engineers and interns. This applicated passed all unit tests and when the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

## Tech/Modules Used :

### [FS](https://nodejs.dev/learn/the-nodejs-fs-module):
* File I/O is provided by simple wrappers around standard POSIX functions. To use this module do require('fs'). All the methods have asynchronous and synchronous forms.

* The asynchronous form always take a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation was completed successfully, then the first argument will be null or undefined.

### [Inquirer](https://www.npmjs.com/package/inquirer)
* Used to format and organize questions asked during the command line experience. Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js (and perhaps the "CLI Xanadu").


### [Object-Oriented-Programing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_%E2%80%94_the_basics) : 
* I implemented OOP using subclasses and constructors to pass data. Constructors are special functions that are extremely useful in creating objects of similar types. Prototypes are JavaScript’s built in system, allowing objects to inherit features from other objects. Prototypes are considered by many to be an advanced JavaScript topic and mastering it will be sure to give you an extra edge as a JavaScript developer.

### [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : 
* JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive.
* JavaScript(JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. 
* With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

### [Jest NPM Package](https://www.npmjs.com/package/jest):
*Complete and ready to set-up JavaScript testing solution. ... Fast interactive mode can switch between running all tests or only test files related to changed files.

## Installation 
You must perform a "npm install" in the directory hosting the package file and run the index.js program from your command line.

## Usage 
This application can be used to quickly create track team member profiles

# Demo
![Team Profile Generator](images/demo.gif) (images/demo2.gif)

## Screenshot  
|![Command Line Screenshot](images/screen.JPG) 

## Contributor
* Brandon Johnson
* Repository: https://github.com/sheikb08/Team-Profile-Generator
