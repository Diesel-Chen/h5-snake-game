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