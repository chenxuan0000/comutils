/**
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} el
 * @param {String} cls
 * @return {Boolean}
 */
var isElement = require('./isElement');
function hasClass (el, cls) {
  if(!isElement(el)) {
    throw new Error("非元素节点");
  }
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(el.className);
}

module.exports = hasClass;