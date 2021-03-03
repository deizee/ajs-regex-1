import Validator from '../task';

test('Метод должен вернуть true', () => {
  const valid = new Validator('Ekaterina');
  expect(valid.validateUsername()).toBeTruthy();
});

test('Метод должен вернуть false, если имя начинается с -', () => {
  const valid = new Validator('-Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя заканчивается на -', () => {
  const valid = new Validator('Ekaterina-');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя начинается с _', () => {
  const valid = new Validator('_Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя заканчивается на _', () => {
  const valid = new Validator('Ekaterina_');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя начинается с цифры', () => {
  const valid = new Validator('7Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя заканчивается цифрой', () => {
  const valid = new Validator('Ekaterina7');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если в имени есть 4 цифры подряд', () => {
  const valid = new Validator('Ekate7777rina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть true, если "запрещенные" символы внутри имени', () => {
  const valid = new Validator('Eka-te_ri81na');
  expect(valid.validateUsername()).toBeTruthy();
});

test('Метод должен вернуть false, если имя начинается с #', () => {
  const valid = new Validator('#Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя начинается с @', () => {
  const valid = new Validator('@Ekaterina');
  expect(valid.validateUsername()).toBeFalsy();
});

test('Метод должен вернуть false, если имя состоит из ##', () => {
  const valid = new Validator('##');
  expect(valid.validateUsername()).toBeFalsy();
});
