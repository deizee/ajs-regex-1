import Validator from '../task';

test('Метод должен вернуть true', () => {
  const valid = new Validator('Ekaterina');
  expect(valid.validateUsername()).toBeTruthy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('-Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('Ekaterina-');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('_Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('Ekaterina_');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('7Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('Ekaterina7');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('Ekaterina7');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false', () => {
  const valid = new Validator('Ekate777rina');
  expect(valid.validateUsername()).toBeFalsy();
});
