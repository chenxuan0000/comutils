/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */

const hasClass = require('./hasClass')

const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
module.exports = removeClass