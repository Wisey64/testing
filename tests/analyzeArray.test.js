const analyzeArray = require('../src/analyzeArray');

test('returns an object', () => {
  expect(typeof analyzeArray([1,2,3])).toBe('object');
});

test('returns correct average', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('returns correct min', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('returns correct max', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('returns correct length', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
