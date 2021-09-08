//游戏类
function Game(map,food,block,snake){
    this.map = map
    this.food = food
    this.block = block
    this.snake =snake

}
//初始化
Game.prototype.init = function(){

    //初始化地图
    this.map.render()

}