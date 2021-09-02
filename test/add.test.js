const add = require('../.dist/add.ts')
test('should add two numbers',()=>{
  expect(add(6,4)).toBe(3)
  expect(add(-6,4)).toBe(-2)
  expect(add(-6,-4)).toBe(-10)
})
test('should not coerce arguments to numbers',()=>{
  expect(add('6','4')).toBe('64')
  expect(add('x', 'y')).toBe('xy')
})