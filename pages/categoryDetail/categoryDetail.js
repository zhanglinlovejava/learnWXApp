// pages/categoryDetail/categoryDetail.js
var _this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
    wx.setNavigationBarTitle({
      title: options.title,
    })
    _this.loadList(options.id)

  },
  loadList: function(id) {
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/categories/videoList',
      data: {
        'id': id
      },
      success: function(result) {
        wx.hideLoading()
        _this.setData({
          categoryList: result.data.itemList
        })
      },
      fail: function(error) {
        wx.hideLoading()
        console.log(error)
      }
    })
  }
})