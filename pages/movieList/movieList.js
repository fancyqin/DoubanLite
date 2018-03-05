// pages/movieList/movieList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      page:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var _this = this;
      var key = options.key;
      if (key ==='in_theaters'){
          wx.setNavigationBarTitle({ title: '正在热映' });
      }else if(key === 'weekly'){
          wx.setNavigationBarTitle({ title: '本周口碑榜' });
      } else if (key === 'new_movies'){
          wx.setNavigationBarTitle({ title: '新片榜'});
      }
      wx.getStorage({
          key: key,
          success: function(res) {
              _this.setData({
                  list: res.data,
                  page: key
              })
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})