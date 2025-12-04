import calculator from '../src/calculator.js';

test ('adds two numbers',()=>{
    expect(calculator.add(2, 3)).toBe(5)
})

test ('subtracts two numbers',()=>{
    expect(calculator.subtract(3, 3)).toBe(0)
})

test ('multiply two numbers',()=>{
    expect(calculator.multiply(2, 3)).toBe(6)
})

test ('divide two numbers',()=>{
    expect(calculator.divide(6, 2)).toBe(3)
})