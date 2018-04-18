import _ from '../../src/is'

import { expect } from 'chai'

describe('test is', function () {
  it('value is String', () => {
    // true
    expect(_.isString('string')).to.true
    expect(_.isString('1')).to.true 
    
    //false
    ;[[], null, undefined, true, false, 1, {}, function(){}].forEach(value => expect(_.isString(value)).to.false)
  })


  it ('value is Regexp', () => {
    //true
    expect(_.isRegexp(/^(abc)$/)).to.true
    expect(_.isRegexp(/^\w$/i)).to.true

    //false
    ;[[], null, undefined, true, false, 1, {}, function(){}, 'string'].forEach(value => expect(_.isRegexp(value)).to.false)
  })


  it ('value is Empty', () => {

    // null undefined empty string  

    expect(_.isEmpty('')).to.true
    expect(_.isEmpty(void 0)).to.true
    expect(_.isEmpty(null)).to.true
    expect(_.isEmpty(0)).to.false
    expect(_.isEmpty(false)).to.false

    // trim string
    expect(_.isEmpty('   ')).to.true
    expect(_.isEmpty('abc ')).to.false
  }) 

  it ('value is NaN', () => {
      

  }) 

  it ('value is Number', () => {
    
  }) 

  it ('value is Integer', () => {
    
  }) 

  it ('value is Float', () => {
    
  }) 


  it ('value is Boolean', () => {
    
  }) 

  it ('value is True', () => {
    
  }) 

  it ('value is False', () => {
    
  }) 

  it ('value is PlainObject', () => {
    
  }) 


  it ('value is Array', () => {
    
  }) 

  it ('value is Function', () => {
    
  }) 


  it ('value is Primitive', () => {
    
  }) 

})
