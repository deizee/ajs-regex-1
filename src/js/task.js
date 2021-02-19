class Validator {
  constructor(name) {
    this.name = name;
  }

  // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.

  validateUsername() {
    return /^[^\-_0-9][-_a-zA-Z0-9]*[^\-_0-9]$/.test(this.name) && !/\d{3}/.test(this.name);
  }
}

export default Validator;

const valid = new Validator('h');
console.log(valid.validateUsername());
