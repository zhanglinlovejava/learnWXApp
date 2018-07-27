// pages/mine/mine.js
var _this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "",
    name: "",
    hideUserButton:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
    _this.getUser()
  },
  getUser: function() {
    wx.showNavigationBarLoading()
    wx.getUserInfo({
      success: function(result) {
        wx.hideNavigationBarLoading()
        _this.setData({
          avatarUrl: result.userInfo.avatarUrl,
          name: result.userInfo.nickName,
          hideUserButton: true
        })
      },
      fail: function(error) {
        wx.hideNavigationBarLoading()
        console.log(error)
        _this.setData({
          hideUserButton: false
        })
      }
    })
  }
})