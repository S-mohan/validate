import _ from './utils'






interface Property {
  [propName: string]: any
}

class Validate {

  /**
   * 
   * @param name 
   * @param value 
   * @param rule 
   * @returns {Boolean}
   */
  static is(name: string, value: any, rule?: any): boolean {
    return true
  }


  static check(rules: Property, data: Property) { }





}

export default Validate



