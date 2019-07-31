Page({
  data:{
    name:'Codewhy',
    age:20,
    students:[
      { id: 110, name: '张三', age: '10'},
      { id: 111, name: '李四', age: '20' },
      { id: 112, name: '王五', age: '30' },
      { id: 113, name: '刘六', age: '40' }
    ],
    counter: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  handleBtnClick(){
    //1.错误做法：界面是不会刷新的
    // console.log('按钮发生了点击')
    // this.data.counter += 1

    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })

  },
  handleBtnSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })

  }
})

//编程范式：
//1.命令式编程：原生操作DOM
//2.声明式编程：vue/React/Angular
