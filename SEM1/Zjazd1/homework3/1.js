// 1) Create an iffe that returns an object with three fields: variable 
// value, function showValue() and function reverseValue(). Calling 
// functions either logs the value or reverse it in an object. If value 
// was not provided yet or is empty showValue function is to return 
// information about that. Value type string or number if number to 
// (*(-1)) if string can be converted to number do so.  

let iife = (function(){
    let value = 'bkla';
    let showValue = function(){
        value ? (
            console.log('function showValue: ' + value)
        ) : (
            console.log('Value was not provided.')
        )
    };
    let reverseValue = function(){    
        if(isNaN(value)) {
            let splitString = value.split("");
            let reverseArray = splitString.reverse(); 
            let joinArray = reverseArray.join(""); 
            value = joinArray;
        } else {
            value = -value;
        }
        return value;  
    }
    return {
        showValue: showValue,
        reverseValue: reverseValue,
    };
})();

console.log(iife.showValue());
console.log(iife.reverseValue());
console.log(iife.showValue());
console.log(iife.reverseValue());
console.log(iife.showValue());
console.log(iife.reverseValue());
console.log(iife.showValue());