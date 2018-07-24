// pages/hot/hot.js
var _this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    weekRankList: [],
    monthRankList: [],
    totalRankList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
    wx.showLoading({
      title: '正在加载...',
    })
    _this.loadRankList("weekly")
    _this.loadRankList("monthly")
    _this.loadRankList("historical")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  loadRankList: function(type) {
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/rankList/videos',
      data: {
        'strategy': type
      },
      success: function(result) {
        if (type == 'weekly') {
          _this.setData({
            weekRankList: result.data.itemList
          })
        } else if (type == 'monthly') {
          _this.setData({
            monthRankList: result.data.itemList
          })
        } else if (type == 'historical') {
          wx.hideLoading()
          _this.setData({
            totalRankList: result.data.itemList
          })
        }
      },
      fail: function(error) {
        if (type == 'historical')
          wx.hideLoading()
        console.log(error)
      }
    })
  },
  switchTab: function(e) {
    var index = e.currentTarget.dataset.index
    if (index === _this.data.currentIndex) {
      return false
    } else {
      _this.setData({
        currentIndex: index
      })
    }
  },
  bindChange: function(e) {
    _this.setData({
      currentIndex: e.detail.current
    })
  }
})