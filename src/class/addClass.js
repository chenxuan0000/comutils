/**
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */

const hasClass = require('./hasClass')

const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls
  }
}
module.exports = addClass