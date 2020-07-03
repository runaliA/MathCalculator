var exec = require('cordova/exec');
const { Module } = require('module');


exports.add=function(arg0,success,error)
{
    exec(success,error,'MaathCalculator','add',[arg0]);
};