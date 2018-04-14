import { expect } from 'chai'
import _ from '../../src/utils'

describe('Test Utils', () => {

  it('value is string', () => {
    // true
    expect(_.isString('string')).to.true
    expect(_.isString('1')).to.true 
    
    //false
    ;[[], null, undefined, true, false, 1, {}, function(){}].forEach(value => expect(_.isString(value)).to.false)
  })

  






})