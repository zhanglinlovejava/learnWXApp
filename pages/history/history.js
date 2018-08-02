// pages/history/history.js
var _this
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this
    wx.setNavigationBarTitle({
      title: '观看历史',
    })
    wx.showLoading({
      title: '正在加载...',
    })
    wx.getStorage({
      key: 'videoId',
      success: function (res) {
        _this.loadData(res.data)
        console.log(res.data)
      },
    })
  },
  loadData: function (id) {
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/video/related?',
      data: {
        'id': id
      },
      success: function (result) {
        wx.hideLoading()
        console.log(result.data)
        _this.setData({
          list: result.data.itemList
        })
      },
      fail: function (error) {
        wx.hideLoading()
        console.log(error)
      }
    })
  }
  
})