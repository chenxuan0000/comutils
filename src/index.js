/**
 * @desc webpack打包入口
 */

const classApi = require('./class/classApi')

const copyObj = require('./object/copyObj')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')
const priceSubstr = require('./regexp/priceSubstr')

const cookieApi = require('./cookie/cookie')
const scrollApi = require('./dom/scrollApi')

const localStorageApi = require('./stroge/localStorage')

const formatPassTime = require('./time/formatPassTime')
const formatTime = require('./time/formatTime')

const isWeixin = require('./device/isWeixin')
const mobileType = require('./device/mobileType')

const typeOf = require('./type/typeOf')
const secretInfo = require('./secret/secretInfo')

const parseQs = require('./url/parseQs')
const stringfyQs = require('./url/stringfyQs')


module.exports = {
  classApi,
  copyObj,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
  priceSubstr,
  cookieApi,
  scrollApi,
  localStorageApi,
  formatPassTime,
  formatTime,
  isWeixin,
  mobileType,
  typeOf,
  secretInfo,
  parseQs,
  stringfyQs
}