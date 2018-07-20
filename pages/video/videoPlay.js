// pages/video/videoPlay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    url: "",
    id: "",
    title: "",
    desc: "",
    duration: "",
    category: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    this.setData({
      id: options.id,
      title: options.title,
      desc: options.desc,
      duration: options.duration,
      category: options.category,
      url: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=" + options.id + "&resourceType=video&editionType=default&source=aliyun"
    })
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/video/related?',
      data: {
        'id': _this.data.id
      },
      success: function (result) {
        wx.hideLoading()
        var oldList = result.data.itemList;
        var newList = new Array()
        for (var i = 0; i < oldList.length; i++) {
          if (oldList[i].type == "videoSmallCard") {
            newList.push(oldList[i])
          }
        }
        _this.setData({
          list: newList
        })
        console.log(_this.data.list)
      },
      fail: function (error) {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  startPlay(url){
    this.setData({
      url:url
    })
  }
})