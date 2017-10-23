//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   imgData:[],
   imgList:[
     {url:"../../images/11.png",text:"111"},
     {url:"../../images/21.png",text:"222"},
     {url:"../../images/31.png",text:"333"},
     {url:"../../images/41.png",text:"444"}
   ],
   movies:[
     {url:"../../images/1.jpg"},
     {url:"../../images/2.jpg"},
     {url:"../../images/3.jpg"},
     {url:"../../images/4.jpg"},
     {url:"../../images/5.jpg"},
     {url:"../../images/6.jpg"}
   ],
   images:[]
  },
  onLoad:function(options){
    var that = this
     wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      method: 'GET',
      data: {},
      header: {
      'Accept': 'application/json'
      },
      //成功后的回调
      success: function (res) {
        console.log('11111' + res),
        that.setData({
          images: res.data
        })
      }
    })

  },
   //用户点击右上角分享触发监听
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  //用户下拉刷新触发监听
  onPullDownRefresh: function() {
    alert("下拉刷新")
  },
  //用户滑到底部触发监听
  onReachBottom: function() {
    alert("上啦加载")
  },
})
