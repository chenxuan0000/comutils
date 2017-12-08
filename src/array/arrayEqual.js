/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
const typeOf = require('../type/typeOf')

const arrayEqual = (arr1 = [], arr2 = []) => {
  if (typeOf(arr1) !== 'array' || typeOf(arr2) !== 'array') {
    throw new Error('参数必须为数组')
  }
  if (arr1 === arr2) return true
  if (arr1.length !== arr2.length) return false
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

module.exports = arrayEqual