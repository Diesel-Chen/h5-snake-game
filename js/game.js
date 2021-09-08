/**
 *
 * @param map 地图类
 * @param food 食物类
 * @param block 障碍物类
 * @param snake 蛇类
 * @constructor  游戏类
 */
function Game(map,food,block,snake){
    this.map = map
    this.food = food
    this.block = block
    this.snake =snake

    //
    this.startbar = null

    //蛇移动时间 ms
    this.time = 500

}
//初始化
Game.prototype.init = function(){

    //渲染地图
    this.renderMap()
    //渲染食物
    this.renderFood()
    //渲染障碍物
    this.renderBlock()
    //渲染蛇
    this.renderSnake()

    //启动游戏
    this.start()



}

//渲染地图
Game.prototype.renderMap = function (){
    this.map.render()
}

//渲染食物
Game.prototype.renderFood = function(){
    let item = this.food
    this.map.arr[item.y][item.x].style.backgroundImage = 'url('+item.img+')'
}

//渲染障碍物
Game.prototype.renderBlock = function(){
    for(let i = 0;i<this.block.arr.length;i++){
        let item = this.block.arr[i]
        this.map.arr[item.y][item.x].style.backgroundImage = 'url('+this.block.img+')'
    }
}

//渲染蛇
Game.prototype.renderSnake = function(){
    //渲染头
    let head = this.snake.arr[0]
    this.map.arr[head.y][head.x].style.backgroundImage = 'url('+this.snake.headImg+')'
    //渲染尾巴
    let tail = this.snake.arr[this.snake.arr.length-1]
    this.map.arr[tail.y][tail.x].style.backgroundImage = 'url('+this.snake.tailImg+')'

    //渲染身体
    for(let i = 1;i<this.snake.arr.length-1;i++){
        let item = this.snake.arr[i]
        this.map.arr[item.y][item.x].style.backgroundImage = 'url('+this.snake.bodyImg+')'
    }

}

//开始游戏
Game.prototype.start = function (){
    let me = this
    me.startbar = setInterval(function(){
        //清除地图标记
        me.clear()

        me.snake.move()
        //渲染食物
        me.renderFood()
        //渲染障碍物
        me.renderBlock()
        //渲染蛇
        me.renderSnake()
    },me.time)
}

Game.prototype.clear = function (){
    for(let i =0;i<this.map.row;i++){
        for(let j =0;j<this.map.col;j++){
            this.map.arr[i][j].style.backgroundImage = ''
        }
    }
}