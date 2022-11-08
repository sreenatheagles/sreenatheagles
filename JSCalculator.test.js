const JSCalculator = require('./JSCalculator')

test('properly add two number',()=>{
    expect(JSCalculator(1,2)).toBe(3)
})