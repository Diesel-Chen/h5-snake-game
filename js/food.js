/**
 *
 * @param x 横坐标
 * @param y 纵坐标
 * @param img 食物图片
 * @constructor 食物类
 */

function Food(x,y,img){
    this.x = x
    this.y = y
    this.img = img

}

Food.prototype.reset = function (x,y){
    this.x = x
    this.y = y
}
