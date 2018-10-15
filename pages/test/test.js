// pages/test/test.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   * data 页面第一次渲染使用的初始数据，界面加载时，data 将会以 JSON 字符串的形式由逻辑层传值渲染层
   * 因此data 中的数据必须是可以转成 JSON 的类型：字符串、数字、布尔值、对象、数组。
   * 渲染层可以可以通过wxml对数据进行绑定
   */
  data: {
    objectArray: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      },
    ],
    text: 'init data',
    array: [{
      msg: '1'
    }, {
      msg: '2'
    }, {
      msg: '3'
    }],
    message: 'Hello MINA!',
    name: 'Rui',
    staffA: {
      firstName: 'lina',
      lastName: 'zhanga'
    },
    staffB: {
      firstName: 'linb',
      lastName: 'zhangb'
    },
    staffC: {
      firstName: 'linc',
      lastName: 'zhangc'
    },
    flag: false,
    a: 1,
    b: 2,
    c: 3,
    length: 1,
    object: {
      key: 'Hello '
    },
    names: ['Fang'],
    zero: 0,
    numberArray: [1, 2, 34, 5, 5, 3],
    x: 0,
    y: 0,
    hidden: true
  },
  addItem: function(e) {
    this.setData({
      array: [{
        msg: '1'
      }, {
        msg: '2'
      }, {
        msg: '3'
      }, {
        msg: '4'
      }]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面加载时触发，一个页面只会调用一次，可以在onLoad 的参数中获取打开当前页面路径中的参数
   */
  onLoad: function(options) {
    const ctx = wx.createCanvasContext('my-canvas', this)
    const grd = ctx.createLinearGradient(0,0,200,0)
    grd.addColorStop(0,'red')
    grd.addColorStop(1,'green')
    ctx.setFillStyle(grd)
    ctx.fillRect(20, 20, 200, 75)
    ctx.draw()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    console.log('点击了分享按钮')
    if (res.from === 'button') {
      //来自页面内的转发内容
      console.log(res.target)
    }
    return ({
      title: '自定义转发标题',
      path: '/page/mine/mine'
    })
  },
  goBack(event) {
    wx.navigateBack()
  }
  /**
   * 组件事件处理函数
   */
  ,
  viewTap: function() {
    console.log('view tap')
  },
  helloLinGe: function() {
    util.sayHello('林哥')
  },
  goodbyeLinGe: function() {
    util.sayGoodbye('林哥')
  },
  eventName: function(e) {
    console.log(e)
  },
  handleTap1: function(e) {
    console.log(e.target.id + "--handleTap1--")
  },
  handleTap2: function(e) {
    console.log(e.target.id + "--handleTap2--")
  },
  handleTap3: function(e) {
    console.log(e.target.id + "--handleTap3--")
    console.log(e.currentTarget.dataset.elementType + "---")
  },
  handleTap4: function(e) {
    console.log(e.target.id + "handleTap4")
  },
  selectImage: function(e) {
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths) // 的每一项是一个本地临时文件路径
      },
    })
  },
  start: function(e) {
    this.setData({
      x: parseInt(e.touches[0].x),
      y: parseInt(e.touches[0].y),
      hidden: false
    })
  },
  move: function(e) {
    this.setData({
      x: parseInt(e.touches[0].x),
      y: parseInt(e.touches[0].y),
      hidden: false
    })
  },
  end: function(e) {
    this.setData({
      hidden: true
    })
  }
})
/**
 * 路由方式
 * 1.navigateTo ，redirectTo 只能打开非tabBar 界面，
 * 2.switchTab，只能打开tabBar 界面
 * 3.reLaunch ,可以打开任意界面
 * 
 * 调用界面路由带的参数可以在目标界面的 onLoad 中获取。
 * 
 * 文件作用域
 * 在javascript 文件中声明的变量和函数只能在该文件中有效，不同的文件中可以声明相同名字的变量和函数。
 * 不会互相影响。
 * 
 * 模块化
 * 可以就将一些公共的代码抽离成为一个单独的js 文件，作为一个模块。模块只有通过module.exports 或者exports
 * 才能对外暴露接口
 * 需要注意的是：
 * exports 是module.exports 的一个引用，因此在模块里面随意更改 exports 的指向会造成未知的错误。
 * 所以更推荐开发者采用module.exports 来暴露模块接口。除非你已经清除知道这两者的关系。
 * 小程序目前不支持直接引入 node_modules , 开发者需要使用到 node_modules 时候建议拷贝出相关的代码到小程序的目录中或者使用小程序支持的 npm 功能。
 * 
 * 事件监听API  
 * 我们约定，以on 开头的 API 用来监听某个事件是否触发，如：wx.onSocketOpen,wx.onCompassChange 等
 * 这类API接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。
 * wx.onCompassChange(function(res){
 *  console.log(res.direction)
 * })
 * 
 * 同步API
 * 我们约定，以Sync 结尾的API都是同比API，如：wx.setStorageSync,wx.getSystenInfoSync,等，此外
 * 也有一些其他的同步API，如，wx.createWorker,wx.getBackgroundAudioManager等，
 * 同步API的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。
 * 代码实例：
 * try{
 *   wx.setStorageSync('key','value')
 * }catch(e){
 *  console.error(e)
 * }
 * 
 * 异步API
 * 大多数API都是异步API，如，wx.request,wx.login等，这类API接口通常都接受一个object类型的参数，
 * 这个参数都支持按需指定一下字段来接收接口调用结果。
 * success    function   非必填  接口调用成功的回调函数
 * fail       function   非必填  接口调用失败的回调函数
 * complete   function   非必填  接口调用结束的回调函数（调用成功、失败都会执行）
 *  其他       Any               接口定义的其他参数
 * 
 * 异步 API 的执行结果需要通过 Object 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用     来实现更丰富的功能，如 wx.request，wx.connectSockets 等。
 * 代码实例：
 * wx.login({
 *  success:function(res){
 *    console.log(res.code)
 *  }
 * })
 * 
 * 
 * WXML (WeiXin Markup Language)是框架设计的一套标签语言，结合基础组件，事件系统，可以构建出事件的结构
 * 具备的能力
 * 1、数据绑定
 * 2、列表渲染
 * 3.条件渲染
 */