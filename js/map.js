//地图类
function Map(singleWidth,singleHeight,width,height){
    //单个单元格宽
    this.singleWidth = singleWidth
    //单个单元格高
    this.singleHeight = singleHeight
    //整体区域宽
    this.width = width
    //整体区域高
    this.height =height
    //总行
    this.row = height / singleHeight
    //总列
    this.col = width / singleWidth

    //单元格映射
    this.arr = []

    //container 地图区域
    this.container = document.createElement('div')

}

Map.prototype.render = function(){
    this.container.className = 'box'
    this.container.style.width = this.width + 'px'
    this.container.style.height = this.height + 'px'
    for(let i = 0;i<this.row;i++){
        let rowDom = document.createElement('div')
        rowDom.className = 'row'
        let colArr = []
        for (let j = 0;j<this.col;j++){
            let colDom = document.createElement('div')
            colDom.className = 'col'
            colDom.style.height = this.singleHeight +'px'
            colDom.style.width = this.singleWidth + 'px'
            rowDom.appendChild(colDom)
            colArr.push(colDom)
        }
        this.container.appendChild(rowDom)
        this.arr.push(colArr)
    }
    document.body.appendChild(this.container)
}