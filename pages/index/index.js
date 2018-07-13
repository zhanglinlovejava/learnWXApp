//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },

  onLoad: function() {
    var _this = this
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v2/feed',
      data: {
        'num': '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        var newList = new Array()
        var videoList = res.data.issueList[0].itemList
        for (var i = 0; i < videoList.length; i++) {
          if (videoList[i].type === 'video') {
            newList.push(videoList[i])
          }
        }
        _this.setData({
          list: newList
        })
      },
      fail: function(error) {
        console.log(error)
      }
    })

  }
})