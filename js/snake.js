/**
 *
 * @param arr 贪吃蛇坐标
 * @constructor 贪吃蛇类
 */
function Snake(arr){
    this.arr = arr

    //左、上、右、下
    //ArrowLeft、ArrowUp、ArrowRight、ArrowDown
    //37、38、39、40
    let headImg = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png']
    this.bodyImg = './img/5.png'
    let tailImg = ['./img/8.png','./img/9.png','./img/6.png','./img/7.png']

    //初始化方向 向右
    this.direction = 'ArrowRight'

    //是否可以改变方向
    this.lock =false

    switch (this.direction) {
        case "ArrowLeft":
            this.headImg = headImg[0]
            this.tailImg = tailImg[0]
            break
        case "ArrowUp":
            this.headImg = headImg[1]
            this.tailImg = tailImg[1]
            break
        case "ArrowRight":
            this.headImg = headImg[2]
            this.tailImg = tailImg[2]
            break
        case "ArrowDown":
            this.headImg = headImg[3]
            this.tailImg = tailImg[3]
            break
    }
}

//蛇移动
Snake.prototype.move = function (){
    //蛇移动 数组第一个元素 找到下一个位置点。删除尾部元素
    let head = {x:this.arr[0].x,y:this.arr[0].y}
    switch (this.direction) {
        case "ArrowLeft":
            head.x -=1
            break
        case "ArrowUp":
            head.y -=1
            break
        case "ArrowRight":
            head.x +=1
            break
        case "ArrowDown":
            head.y +=1
            break
    }
    this.arr.unshift(head)
    this.arr.pop()
}

//蛇改变方向
Snake.prototype.change = function(e){
    if(this.lock){
        return
    }
    switch (this.direction){
        case "ArrowLeft":
            if(e.key === 'ArrowRight')
                return
            break
        case "ArrowUp":
            if(e.key === 'ArrowDown')
                return
            break
        case "ArrowRight":
            if(e.key === 'ArrowLeft')
                return
            break
        case "ArrowDown":
            if(e.key === 'ArrowUp')
                return
            break
    }
    if(e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown')
        this.direction = e.key

    this.lock = true


}