
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

const formatSecond = duration =>{
  var minute = parseInt(duration / 60)
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
  formatSecond:formatSecond,
  formatDuration: formatDuration
}