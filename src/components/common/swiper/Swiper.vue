<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart="touchStart"
             @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>

        <div class="indicator" v-if="showIndicator && slideCount > 1">
            <div v-for="(item, index) in slideCount" class="indi-item"
                 :class="{active: index === currentIndex-1}"
                 :key="index"></div>
        </div>

        <!--<slot name="indicator"></slot>-->

        <!--<div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item,index) in slideCount" class="indi-item"
                    :class="{active :index === currentIndex - 1}"
                    :key="index">
                </div>
            </slot>
        </div>-->
    </div>

</template>

<script>
  export default {
    name: "Swiper",
    props: {
      //是否显示下方小圆点
      showIndicator: {
        type: Boolean,
        default: true
      },
      //循环滚动的时间间隔
      interval: {
        type: Number,
        default: 3000,
      },
      //切换动画的时间
      animDuration: {
        type: Number,
        default: 300
      },
      //拖动的比例 判断是否切换下一个swiperItem
      moveRatio: {
        type: Number,
        default: 0.25,
      }
    },
    data() {
      return {
        slideCount: 0,//轮播的swiperItem个数
        totalWidth: 0,//swiperItem的宽度
        currentIndex: 1,//当前的index
        swiperStyle: {},//swiper的样式
        scrolling: false,//是否正在滚动
      }
    },
    mounted() {
      setTimeout(() => {
        //1.操作DOM 在前后各添加一张slide
        this.handleDom();
        //2.开启定时器
        this.startTimer();
      }, 500)
    },
    methods: {
      handleDom() {
        //1.获取要操作的元素
        //swiperEl：class为swiper的元素 有n个swiperItem class是swiper
        //slidesELs：class为slide的元素 轮播中图在的那个div swiperItem
        let swiperEl = document.querySelector('.swiper');
        let slideEls = document.getElementsByClassName('slide');
        //2.保存个数
        this.slideCount = slideEls.length;
        //3.如果大于一个 则在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = slideEls[0].cloneNode(true);
          let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slideEls[0]);
          swiperEl.appendChild(cloneFirst);
          //返回swiper那个div的宽度（包括元素宽度、内边距和边框，不包括外边距）
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }

        //4. 让swiper元素显示第一个
        this.setTransform(-this.totalWidth);
      },
      /*设置滚动的位置*/
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
      /*
      * 定时器操作
      */
      startTimer() {
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },

      stopTimer() {
        window.clearInterval(this.playTimer);
      },

      /*
      * 滚动内容到正确的位置
      */
      scrollContent(currentPosition) {
        //设置正在滚动
        this.scrolling = true;
        //开始滚动动画
        this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
        this.setTransform(currentPosition);
        //判断滚动到的位置
        this.checkPosition();
        //设置滚动完成
        this.scrolling = false;
      },
      /*
      * 校验正确的位置（防止滚过头显示空白）
      */

      checkPosition() {
        window.setTimeout(() => {
          //1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth)
          }
          //2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex - 1);
        }, this.animDuration)
      },

      /*
      *鼠标拖动事件处理
      */
      touchStart(e) {
        //1.如果正在滚动 不允许拖动
        if (this.scrolling) return;
        //2.停止定时器
        this.stopTimer();
        //3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
      },
      touchMove(e) {
        //1.计算用户拖动的距离
        this.currentX = e.touches[0].pageX;
        //向右触摸时pageX变大
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;

        //2.设置当前的位置
        this.setTransform(moveDistance);
      },
      touchEnd() {
        //1.获取移动的距离
        let currentMove = Math.abs(this.distance);
        //2.判断最终的距离
        if (this.distance === 0) {
          return
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
          //正值 slide被向右拖动 显示前一张
          this.currentIndex--;
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex++;
        }

        //3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        //4.移动完成后重新开始定时器
        this.startTimer();
      },
      /*
        *控制上一个，下一个
        */
      previous() {
        this.changeItem(-1);
      },
      next() {
        this.changeItem(1);
      },
      changeItem(num) {
        this.stopTimer();
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth)
        this.startTimer();
      },
    }
  }
</script>

<style scoped>
    #hy-swiper{
        overflow: hidden;
        position: relative;
    }
    .swiper{
        display: flex;
    }
    .indicator{
        display: flex;
        position: absolute;
        width: 100%;
        bottom:8px;
        justify-content: center;
    }
    .indi-item{
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }

    /*同一个元素的class之间不要加空格！*/
    .indi-item.active{
        background-color: rgba(212,62,45,0.8);
    }
</style>
