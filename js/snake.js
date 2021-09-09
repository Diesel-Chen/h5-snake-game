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
    this.headImgArr = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png']
    this.bodyImg = './img/5.png'
    this.tailImgArr = ['./img/8.png','./img/9.png','./img/6.png','./img/7.png']

    //初始化方向 向右
    this.direction = 'ArrowRight'

    //是否可以改变方向
    this.lock =false
    this.headImg = ''
    this.tailImg = ''

    switch (this.direction) {
        case "ArrowLeft":
            this.headImg = this.headImgArr[0]
            this.tailImg = this.tailImgArr[0]
            break
        case "ArrowUp":
            this.headImg = this.headImgArr[1]
            this.tailImg = this.tailImgArr[1]
            break
        case "ArrowRight":
            this.headImg = this.headImgArr[2]
            this.tailImg = this.tailImgArr[2]
            break
        case "ArrowDown":
            this.headImg = this.headImgArr[3]
            this.tailImg = this.tailImgArr[3]
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
    //判断尾部图片方向
    tail = this.arr[this.arr.length-1]
    tailSecond = this.arr[this.arr.length-2]
    if(tail.x === tailSecond.x){
        if (tailSecond.y>tail.y){
            this.tailImg = this.tailImgArr[3]
        }else{
            this.tailImg = this.tailImgArr[1]
        }
    }else if (tail.y === tailSecond.y){
        if(tailSecond.x>tail.x){
            this.tailImg = this.tailImgArr[2]
        }else{
            this.tailImg = this.tailImgArr[0]
        }
    }
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
    if(e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown'){
        this.direction = e.key
        switch (this.direction) {
            case "ArrowLeft":
                this.headImg = this.headImgArr[0]
                break
            case "ArrowUp":
                this.headImg = this.headImgArr[1]
                break
            case "ArrowRight":
                this.headImg = this.headImgArr[2]
                break
            case "ArrowDown":
                this.headImg = this.headImgArr[3]
                break
        }
    }
    this.lock = true

}

//蛇增长
Snake.prototype.groupUp = function (){
    tail = this.arr[this.arr.length -1]
    this.arr.push(tail)
}
