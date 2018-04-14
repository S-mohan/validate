import { expect } from 'chai'
import V from '../../src/validate'

describe.only('Validate Class Test', function () {

  it ('Validate built-in rules', function () {
    const rules = {
       title : {
         require  : '',
         notEmpty : '',
         between : {
           min : 2,
           max : 20
         }
       },
        
    }

    const data = {
      title : '这是一条测试',
      name : ''
    }

    const res = V.check(rules, data)
    console.log(res)

    expect(res.status).to.false

  })

})