// pages/video/videoPlay.js
var _this
var videoContext
let utils = require('../../utils/util')
Page({
  data: {
    list: [],
    url: "",
    id: "",
    title: "",
    desc: "",
    duration: "",
    category: "",
    scroll_top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      id: options.id,
      title: options.title,
      desc: options.desc,
      duration: utils.formatDuration(options.duration),
      category: options.category,
      url: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=" + options.id + "&resourceType=video&editionType=default&source=aliyun"
    })
    
    this.loadData(this.data.id)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  playVideo: function(e) {
    this.setData({
      url: e.currentTarget.dataset.url,
      id: e.currentTarget.dataset.id,
      title: e.currentTarget.dataset.title,
      desc: e.currentTarget.dataset.desc,
      duration: utils.formatDuration(e.currentTarget.dataset.duration),
      category: e.currentTarget.dataset.category,
      scroll_top: 0
    })
    videoContext.play()
    this.loadData(this.data.id)
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.title,
    })
  },
  loadData: function(id) {
    wx.setStorageSync('videoId', id)
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/video/related?',
      data: {
        'id': id
      },
      success: function(result) {
        wx.hideLoading()
        _this.setData({
          list: result.data.itemList
        })
      },
      fail: function(error) {
        wx.hideLoading()
        console.log(error)
      }
    })
  }
})