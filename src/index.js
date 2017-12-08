/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')
const isElement = require('./class/isElement')
const toggleClass = require('./class/toggleClass')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')

const formatPassTime = require('./time/formatPassTime')
const formatTime = require('./time/formatTime')


const typeOf = require('./type/typeOf')
const secretInfo = require('./secret/secretInfo')

const parseQs = require('./url/parseQs')
const stringfyQs = require('./url/stringfyQs')


module.exports = {
  arrayEqual,
  isElement,
  addClass,
  hasClass,
  removeClass,
  toggleClass,
  deepClone,
  isEmptyObject,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
  formatPassTime,
  formatTime,
  typeOf,
  secretInfo,
  parseQs,
  stringfyQs
}