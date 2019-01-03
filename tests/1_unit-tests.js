/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input="3.56km"
      assert.equal(convertHandler.getNum(input),3.56);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input="1/2km"
      assert.equal(convertHandler.getNum(input),'1/2');
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input="3.8/6mi"
      assert.equal(convertHandler.getNum(input),'3.8/6');
     done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input="3/8/6mi"
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
   test('No Numerical Input', function(done) {
      var input="L"
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    
    test('For Each Valid Unit Inputs', function(done) {
      
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele),ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input="23mkm"
      assert.equal(convertHandler.getUnit(input), 'invalid unit')
     
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','lbs','kg','mi','km'];
      var expect = ['gallons','liters','pounds','kilogramms','miles','kilometers'];
      var spellUnits={'gal':'gallons','l':'liters','lbs':'pounds','kg':'kilogramms','mi':'miles','km':'kilometers'};
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.spellOutUnit(ele),expect[i])
      })
      done(); 
    });
    
  });
  
    
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = ['5', 'gal'];
      var expected = 18.9;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);//0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = ['11.35', 'L'];
      var expected = 3;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = ['31/50', 'mi'];
      var expected = 1;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = ['16.095', 'km'];
      var expected = 10;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = ['100', 'lbs'];
      var expected = 45.4;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = ['83.006', 'kg'];
      var expected = 183;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});