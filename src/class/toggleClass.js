/**
 * @desc   为元素添加/去除class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */

const hasClass = require('./hasClass')

const toggleClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  } else {
    ele.className += ' ' + cls
  }
}

module.exports = toggleClass