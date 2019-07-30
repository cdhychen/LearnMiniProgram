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