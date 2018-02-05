/**
 * @desc   格式化时间戳为年月日时分秒
 * @param  {Number,Date} date
 * @param  {String} fmt
 * @return {String}
 */

function isDate (o) {
  return Object.prototype.toString.call(o) === '[object Date]'
}

const formatTime = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  if (isDate(date) === false) {
    date = new Date(+date)
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

module.exports = formatTime
