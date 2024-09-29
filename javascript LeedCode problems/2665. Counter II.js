function createCounter(init) {
    let current = init; // Store the current value

    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

// Test Cases:

const counter = createCounter(5); // Initialize counter with 5

console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
