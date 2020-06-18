<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GridView",
    props:{
      cols:{type:Number, default:2}, //列数
      hMargin:{type:Number, default:4},//左右边距
      vMargin:{type:Number, default:8},//上下边距
      itemSpace:{type:Number, default:0},//元素之间的距离
      lineSpace:{type:Number, default:8},//行之间的距离
    },
    mounted() {
      setTimeout(this.autoLayout,20)
    },
    updated() {
      this.autoLayout()
    },
    methods:{
      autoLayout(){
        let gridEl = this.$refs.gridView;
        let children = gridEl.children;
        //设置gridEl内边距
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

        //计算item高度
        let itemWidth = (gridEl.clientWidth - 2*this.hMargin -
                        (this.cols - 1)*this.itemSpace)/this.cols;
        for(let i=0;i<children.length;i++){
          let item = children[i];
          item.style.width = itemWidth +'px';
          if( (i+1) % this.cols !== 0){
            //不是每行最后一个元素 加右margin
            item.style.marginRight = this.itemSpace + 'px';
          }
          if( i >= this.cols){
            //不是第一行元素 加marginTop
            item.style.marginTop = this.lineSpace + 'px'
          }
        }
      }
    }
  }
</script>

<style scoped>

  .grid-view{
    display: flex;
    flex-wrap: wrap;
  }
</style>