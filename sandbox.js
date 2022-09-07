let obj = {};
Object.defineProperty(
  obj,
  'foo',
  { value: 'bar', enumerable: false }
);
console.log(obj)
console.log('foo' in obj);