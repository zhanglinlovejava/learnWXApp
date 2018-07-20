// pages/video/videoPlay.js
var oldList
var _this
var newList = new Array()
var videoContext
Page({
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
    _this = this
    this.setData({
      id: options.id,
      title: options.title,
      desc: options.desc,
      duration: options.duration,
      category: options.category,
      url: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=" + options.id + "&resourceType=video&editionType=default&source=aliyun"
    })
    this.loadData(this.data.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    videoContext = wx.createVideoContext("myVideo")
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
  playVideo: function(e) {
    this.setData({
      url: e.currentTarget.dataset.url
    })
    videoContext.play()
    this.loadData(this.data.id)
  },
  loadData: function(id) {
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
        oldList = result.data.itemList;
        newList = []
        for (var i = 0; i < oldList.length; i++) {
          if (oldList[i].type == "videoSmallCard") {
            newList.push(oldList[i])
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