import validator from '../src/validator'

const constraints = {
  username: {
    required: true,
    notEmpty: true,
  },
  password: {
    notEmpty: true,
    minLength: 4,
    maxLength: 10
  },
  email: {
    email: true
  }
}

const source = {
  username: '',
  password: '',
  email: ''
}


test('', () => {
  const res = validator(source, constraints)
  console.log(JSON.stringify(res))
})