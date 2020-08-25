<template>
  <div class="pWrapper">
    <div class="gtBox van-hairline--bottom">
      <div class="gtBoxL">
        <p>封面</p>
      </div>
      <div class="gtBoxR">
        <p>集合啦！动物森友会</p>
        <van-grid column-num="2" direction="horizontal" icon-size='1rem' :center="false" >
          <van-grid-item icon='photo-o' text='图鉴' />
          <van-grid-item icon='photo-o' text='交易中心' />
          <van-grid-item icon='photo-o' text='理财工具' />
          <van-grid-item icon='photo-o' text='生成护照' />
          <van-grid-item icon='photo-o' text='岛屿规划' />
        </van-grid>
      </div>
    </div>
    <div class="gtBox">
      <div class="gtBoxL">
        <p>封面</p>
      </div>
      <div class="gtBoxR">
        <p>使命召唤：战区</p>
        <van-grid column-num="2" direction="horizontal" icon-size='1rem' :center="false">
          <van-grid-item icon='photo-o' text='战绩查询' />
        </van-grid>
      </div>
    </div>
    <div class="gtBox">
      <div class="gtBoxL">
        <p>封面</p>
      </div>
      <div class="gtBoxR">
        <p>宝可梦：剑/盾</p>
        <van-grid column-num="2" direction="horizontal" icon-size='1rem' :center="false">
          <van-grid-item icon='photo-o' text='宝可梦图鉴' />
          <van-grid-item icon='photo-o' text='属性计算器' />
          <van-grid-item icon='photo-o' text='伤害计算器' />
        </van-grid>
      </div>
    </div>
    <div class="gtBox">
      <div class="gtBoxL">
        <p>封面</p>
      </div>
      <div class="gtBoxR">
        <p>荒野大镖客：救赎2</p>
        <van-grid column-num="2" direction="horizontal" icon-size='1rem' :center="false">
          <van-grid-item icon='photo-o' text='互动地图' />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { image as VanImage, Grid, GridItem } from 'vant'

Vue.use(VanImage)
Vue.use(Grid)
Vue.use(GridItem)
export default {

}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  /* height: 100%; */
  overflow-x: hidden;
}
.gtBox{
  width: 100%;
  min-height: 8rem;
  height: auto;
  overflow: hidden;
  margin: .5rem;
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.gtBoxL{
  flex: 1 1 auto;
  width: 25%;
  padding: 0 .5rem;
  /* height: 100%; */
}
.gtBoxL p{
  display: block;
  background-color: #8ac6d1;
  width: 100%;
  height: 8rem;
  text-align: center
}
.gtBoxR{
  flex: 1 1 auto;
  width: 75%;
  padding-left: .5rem;
  height: auto;
  display: flex;
  align-content: start;
  flex-wrap: wrap;
}
.gtBoxR p{
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  padding-left: .5rem;
  text-align: left;
}
.gtBoxR>div{
  width: 100%;
  min-height: 7.5rem;
}
</style>
