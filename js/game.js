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

    //启动游戏句柄
    this.startbar = null

    //蛇移动时间 ms
    this.time = 120

    //能否正常游戏
    this.state = true

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

    this.startbar = setInterval(function(){
        //清除地图标记

        //移动蛇
        me.snake.move()
        //检测边界
        me.check()
        //检测障碍物
        me.checkBlock()

        //吃食物
        me.eatFood()
        if (me.state){
            me.clear()

            //渲染食物
            me.renderFood()
            //渲染障碍物
            me.renderBlock()
            //渲染蛇
            me.renderSnake()

            me.snake.lock = false
        }

    },this.time)

    window.onkeydown = function (e){
        me.snake.change(e)
    }
}

Game.prototype.clear = function (){
    for(let i =0;i<this.map.row;i++){
        for(let j =0;j<this.map.col;j++){
            this.map.arr[i][j].style.backgroundImage = ''
        }
    }
}

Game.prototype.check = function (){
    head = this.snake.arr[0]
    if(head.x <0 || head.y <0 || head.x >= this.map.col || head.y >= this.map.row ){
        alert("游戏结束，你的得分:"+this.snake.arr.length+"")
        clearInterval(this.startbar)
        this.state =false
    }
}

Game.prototype.checkBlock = function (){
    head = this.snake.arr[0]
    for(let i = 0;i<this.block.arr.length;i++){
        item = this.block.arr[i]
        if(head.x === item.x && head.y ===item.y){
            alert("游戏结束，你的得分:"+this.snake.arr.length+"")
            clearInterval(this.startbar)
            this.state =false
        }
    }
}

Game.prototype.eatFood = function (){
    head = this.snake.arr[0]
    if(head.x === this.food.x && head.y ===this.food.y){
        //蛇成长
        this.snake.groupUp()
        //充值食物
        this.resetFood()
    }
}

Game.prototype.resetFood = function (){
    let x = Math.floor(Math.random() * this.map.col)
    let y = Math.floor(Math.random() * this.map.row)
    for(let i=0;i<this.snake.arr.length;i++){
        if(x ===this.snake.arr[i].x && y === this.snake.arr[i].y){
            this.resetFood()
            return
        }
    }

    for(let i =0;i<this.block.arr.length;i++){
        if(x ===this.block.arr[i].x && y === this.block.arr[i].y){
            this.resetFood()
            return
        }
    }

    this.food.reset(x,y)

}

