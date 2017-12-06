/**
 * @desc   为元素添加/去除class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */

var hasClass = require('./hasClass');

function toggleClass (ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  } else {
    ele.className += ' ' + cls;
  }
}

module.exports = toggleClass;