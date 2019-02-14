<template>
  <div class='gzbot'>
    <div class='gz'>
      <a @click='mapViewReset'>
        <img :src='tool.reset.src' :title='tool.reset.title'>
      </a>
      <a @click='zoomIn'>
        <img :src='tool.zoomin.src' :title='tool.zoomin.title'>
      </a>
      <a @click='zoomOut'>
        <img :src='tool.zoomout.src' :title='tool.zoomout.title'>
      </a>
      <a @click='clearMap'>
        <img :src='tool.clearmap.src' :title='tool.clearmap.title'>
      </a>
      <a @click='layerSwitch'>
        <img :src='tool.layerswitch.src' :title='tool.layerswitch.title'>
      </a>
      <a @click='mapViewReset'>
        <img :src='tool.manage.src' :title='tool.manage.title'>
      </a>
      <a @click='mapViewReset'>
        <img :src='tool.quit.src' :title='tool.quit.title'>
      </a>
    </div>
  </div>
</template>

<script>
import bus from '../common/bus.js'
export default {
  data () {
    return {
      tool: {
        reset: {title: '全图显示', src: '../../static/images/icon_gz1.png'},
        zoomin: {title: '地图放大', src: '../../static/images/icon_gz2.png'},
        zoomout: {title: '地图缩小', src: '../../static/images/icon_gz3.png'},
        clearmap: {title: '清空图层', src: '../../static/images/icon_gz5.png'},
        layerswitch: {title: '图层控制', src: '../../static/images/2d.png'},
        manage: {title: '系统管理', src: '../../static/images/icon_xtsz.png'},
        quit: {title: '退出登录', src: '../../static/images/icon_tc.png'}
      }
    }
  },
  methods: {
    mapViewReset () {
        bus.$emit('maptool', 'mapViewReset')
    },
    zoomIn () {
      bus.$emit('maptool', 'zoomIn')
    },
    zoomOut () {
      bus.$emit('maptool', 'zoomOut')
    },
    clearMap () {
      console.log('clearMap')
    },
    layerSwitch () {
      console.log('openLayerSwitch')
    }
  }
}
</script>

<style scoped>
  .gzbot{
    width:386px;
    height:86px;
    margin:0px auto;
    position:fixed;
    bottom:0px;
    z-index:999;
    right: 50px;
    left: 50px;
  }
  .gz{
    width:386px;
    height:50px;
    line-height:30px;
    margin:0px auto;
    background:url(../../static/images/map_gjbg.png) center no-repeat;
    text-align:center;
    padding:10px 10px;
  }
  .gz a{ padding-left:8px; padding-right:8px;}
</style>
