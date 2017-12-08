/**
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} el
 * @param {String} cls
 * @return {Boolean}
 */
const hasClass = (el, cls) => {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(el.className)
}

module.exports = hasClass