const formatDuration = function(duration) {
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

const formatSecond = duration => {
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

const saveVideoId = id => {
  array.push(id)
  wx.setStorage({
    key: 'videoId',
    data: id,
  })
}

module.exports = {
  formatSecond: formatSecond,
  saveVideoId:saveVideoId,
  formatDuration: formatDuration
}