class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[^_\W\d-][\w-]*[^_\W\d-]+$/.test(this.name) && !/\d{4}/.test(this.name);
  }
}

export default Validator;

const valid = new Validator('h');
console.log(valid.validateUsername());
