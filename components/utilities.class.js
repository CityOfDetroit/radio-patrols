'use strict';
export default class JSUtilities {
  constructor() {
  }
  static emailValidator(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  static phoneFormater(obj){
    console.log(obj);
    var numbers = obj.target.value.replace(/\D/g, ''),
    char = {0:'(',3:')',6:'-'};
    obj.target.value = '';
    for (var i = 0; i < numbers.length; i++) {
        obj.target.value += (char[i]||'') + numbers[i];
    }
  }

  static stripPhoneNumber(number){
    let newNumber = '';
    console.log(number.split('('));
    newNumber = number.split('(')[1];
    console.log(newNumber);
    console.log(newNumber.split(')'));
    newNumber = newNumber.split(')')[0] + newNumber.split(')')[1];
    console.log(newNumber);
    console.log(newNumber.split('-'));
    newNumber = newNumber.split('-')[0] + newNumber.split('-')[1];
    console.log(newNumber);
    return newNumber;
  }
}
