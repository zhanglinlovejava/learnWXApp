//index.js
//获取应用实例
const app = getApp()
var _this
var nextPageUrl
var firstPageUrl = 'http://baobab.kaiyanapp.com/api/v2/feed?num=1'
var newList = new Array()
Page({
  data: {
    list: []
  },

  onLoad: function() {
    _this = this
    _this.loadData(firstPageUrl)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    _this.loadData(nextPageUrl)
  },
  loadData: function(url) {
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        wx.hideLoading()
        var videoList = res.data.issueList[0].itemList
        nextPageUrl = res.data.nextPageUrl
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
        wx.hideLoading()
      }
    })
  }
})