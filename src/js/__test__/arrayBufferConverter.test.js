import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter should decode data from getBuffer correctly', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
