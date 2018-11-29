// 2) Change the above iffe. So that returned object doesn’t publicly allow 
// access to value but instead of that gives us a function setValue(). Purpose 
// of this function is quite easy to grasp. Closure pattern.


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