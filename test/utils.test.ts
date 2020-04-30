import { getObjectValue, hasKey } from '../src/utils'

const object = {
  a: 1,
  b: {
    a: 2,
    c: [1, 2],
    d: {
      e: 'success'
    }
  }
}


test('get value in Object', () => {
  expect(getObjectValue('a', object)).toBe(1)
  expect(getObjectValue('b.a', object)).toBe(2)
  expect(getObjectValue('b.c.1', object)).toBe(2)
  expect(getObjectValue('b.d.e', object)).toBe('success')
  expect(getObjectValue('c.e', object)).toBe(undefined)
})


test('Object has key', () => {
  expect(hasKey('a', object)).toBe(true)
  expect(hasKey('b.a', object)).toBe(true)
  expect(hasKey('b.c.1', object)).toBe(true)
  expect(hasKey('b.d.e', object)).toBe(true)
  expect(hasKey('c.e', object)).toBe(false)
})

