var app = getApp()

Page({
  data: {
    imgUrls: [
      '../../../../images/banner1.png',
      '../../../../images/banner2.png',
      '../../../../images/banner3.jpg',
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  onLoad(e) {
    console.log(e.title)
    this.setData({
      msgList: [
        { url: "url", title: "消费分期业务目前仅广州地区使用" },
        { url: "url", title: "消费分期业务目前仅广州地区使用" },
        { url: "url", title: "消费分期业务目前仅广州地区使用" }]
    });
  }  
})
