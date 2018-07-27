// pages/discover/discover.js
var _this
var nextFollowUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    relatedList: [],
    categoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
    this.loadRelated("http://baobab.kaiyanapp.com/api/v4/tabs/follow",false)
    this.loadCategories()
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
  },
  loadRelated: function(url, isLoadMore) {
    if (isLoadMore) {
      wx.showNavigationBarLoading()
    } else {
      wx.showLoading({
        title: '正在加载...',
      })
    }
    wx.request({
      url: url,
      success: function(result) {
        nextFollowUrl = result.data.nextPageUrl
        _this.setData({
          relatedList: _this.data.relatedList.concat(result.data.itemList)
        })
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      },
      fail: function(error) {
        wx.hideLoading()
        wx.hideNavigationBarLoading()
        console.log(error)
      }
    })
  },
  loadCategories: function() {
    wx.showLoading({
      title: '正在加载...',
    })
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/categories',
      success: function(result) {
        _this.setData({
          categoryList: result.data
        })
        wx.hideLoading()
      },
      fail: function(error) {
        wx.hideLoading()
      }
    })
  },
  loadMoreFollow: function(e) {
    console.log(nextFollowUrl)
    _this.loadRelated(nextFollowUrl,true)
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '发现',
    })
  }
})