/*
*
*
*       Complete the handler logic below
*       
*       
*/

var validUnits=['gal','l','lbs','kg','mi','km']
var convertedUnits={'gal':'l','l':'gal','lbs':'kg','kg':'lbs','mi':'km','km':'mi'}
var spellUnits={'gal':'gallons','l':'liters','lbs':'pounds','kg':'kilogramms','mi':'miles','km':'kilometers'}

var regexU =/(kg|km|gal|lbs|mi|gal|L)$/giy


var valid12Num= /^\d+$/g
var valid3Num=/^\d\d*(\d*\/{1}\d+\d*$)*(\d*\.{1}\d+\d*$)*(\d*\.{1}\d+\/{1}\d*$)*(\d*\/{1}\d+\.{1}\d*$)*\d*$/g
 //   /^\d\d*(\.{1}\d+)*\d*(\d*\/{1}\d+(\.{1}\d+)*)*\d*\d*$/g
 
function ConvertHandler() {
  
  
  this.getNum = function(input) {
    var result;
    var arr=input.split(/([a-zA-Z]+.*)/);//array[0]-num, [1]-unit
   
    var num=arr[0].match(valid3Num)
    result= num==null? //num[0].length==0? 1:
      "invalid number" : 
    num[0]
   
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
   
    var arr=input.split(/([a-zA-Z]+.*)/);//array[0]-num, [1]-unit
    var unit=arr[1].match(regexU)
    result= unit!=null? 
      unit.toString().toLowerCase() : "invalid unit"
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit=initUnit.toLowerCase();
    result=convertedUnits[initUnit]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    unit=unit.toLowerCase();
    result= unit!=null? 
    result = spellUnits[unit]: "invalid unit"
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    initUnit=initUnit.toLowerCase(); 
    var table={'gal':"*"+galToL,'l':"/"+galToL,'lbs':"*"+lbsToKg,'kg':"/"+lbsToKg,'mi':"*"+miToKm,'km':"/"+miToKm}
    
     if ((initNum=='invalid number')||(initUnit=="invalid unit"))
     result="invalid"
     else{result=eval(initNum.concat(table[initUnit]))};
    
   return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if ((initNum=='invalid number')||(initUnit=="invalid unit"))
     result="invalid"
     else{
    result= 
      initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum.toFixed(5)+" "+this.spellOutUnit(returnUnit)
    
    return result;}
  };
  
}

module.exports = ConvertHandler;
