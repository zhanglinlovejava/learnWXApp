const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatDuration = function(duration) {
  var minute = parseInt(duration/ 60)
  var second = duration % 60
  if (minute <= 9) {
    if (second <= 9) {
      return "0" + minute + "'0" + second + "\""
    } else {
      return "0" + minute + "'" + second + "\""
    }
  } else {
    if (second <= 9) {
      return minute + "'0" + second + "\""
    } else {
      return minute + "'" + second + "\""
    }
  }
}

module.exports = {
  formatTime: formatTime,
  formatDuration: formatDuration
}