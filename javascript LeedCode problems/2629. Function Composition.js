/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        
        let result = x;
        
        for(let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        
        return x;
        
    }
};
let test=compose([])
console.log(test(42));

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */