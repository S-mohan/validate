import { expect } from 'chai'
import V from '../../src/validator'

describe.only('Validate Class Test', function () {

  it('Validate built-in rules', function () {
    const rules = {
      title: {
        require: '',
        notEmpty: '',
        minLength: {
          rule: 2,
        },
        maxLength: {
          rule: 20,
        }
      },

    }

    const data = {
      title: '这是一条测试',
      name: ''
    }

    const res = V.check(rules, data)
    console.log(res)

    expect(res.status).to.false

  })

})