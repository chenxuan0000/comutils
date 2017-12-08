/**
 * @desc 判断元素是否为元素节点。
 * @param {HTMLElement} el
 * @return {Boolean}
 */
const isElement = (el) => {
  return el && el.nodeType === Node.ELEMENT_NODE
}

module.exports = isElement