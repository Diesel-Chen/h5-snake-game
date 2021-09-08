//游戏类
function Game(map,food,block,snake){
    this.map = map
    this.food = food
    this.block = block
    this.snake =snake

}
//初始化
Game.prototype.init = function(){

    //渲染地图
    this.map.render()
    //渲染食物
    this.renderFood()
    //渲染障碍物
    this.renderBlock()



}

//渲染食物
Game.prototype.renderFood = function(){
    item = this.food
    this.map.arr[item.y][item.x].style.backgroundImage = 'url('+item.img+')'
}

//渲染障碍物
Game.prototype.renderBlock = function(){
    for(let i = 0;i<this.block.arr.length;i++){
        item = this.block.arr[i]
        this.map.arr[item.y][item.x].style.backgroundImage = 'url('+this.block.img+')'
    }
}