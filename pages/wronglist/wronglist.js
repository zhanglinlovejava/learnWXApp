// pages/wronglist/wronglist.js
let _this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodNum: 1,
    tagArray: ["我没拿商品", "系统多算了件数", "商品过期", "商品变质", "商品破损", "活动价未享受", "优惠券无法用", "其他"],
    selectedTags: [],
    fbLength: 0,
    images: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _this = this
  },
  add: function(e) {
    var {
      foodNum
    } = this.data;
    foodNum++;
    this.setData({
      foodNum: foodNum++
    });
  },
  subtract: function(e) {
    var {
      foodNum
    } = this.data;
    if (foodNum <= 0)
      return false;
    foodNum--;
    this.setData({
      foodNum: foodNum
    });
  },
  toggleTag: function(e) {
    let index = e.currentTarget.dataset.idx
    var {
      selectedTags
    } = this.data;
    if (selectedTags[index] === -1 || selectedTags[index] === undefined) {
      selectedTags[index] = index
    } else {
      selectedTags[index] = -1
    }
    this.setData({
      selectedTags: selectedTags
    })
  },
  onInput: function(e) {
    this.setData({
      fbLength: e.detail.cursor
    })
  },
  chooseImage: function(e) {
    _this.chooseGallery()
  },
  deleteImage: function(e) {
    this.data.images.splice(e.currentTarget.dataset.idx, 1)
    this.setData({
      images: this.data.images
    })
  },
  chooseGallery: function() {
    wx.chooseImage({
      count: 5 - _this.data.images.length,
      success: function(res) {
        _this.setData({
          images: _this.data.images.concat(res.tempFilePaths)
        })
      },
    })
  },
})