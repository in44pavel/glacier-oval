/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
    var output={};
    if(initNum=="invalid number" && initUnit!="invalid unit") output="invalid number"
    else if(initNum!="invalid number" && initUnit=="invalid unit") output="invalid unit"
    
    else if(initNum=="invalid number" && initUnit=="invalid unit") output="invalid number and unit"
    else (output={
      initNum: initNum, 
      initUnit: initUnit, 
      returnNum: returnNum/*.toFixed(5)*/, 
      returnUnit: returnUnit, 
      string: toString})
    
    res.json(output)
   //console.log(res.status)
    });
    
};
