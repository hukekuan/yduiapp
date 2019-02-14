<template>
  <div>
    <div id="map" ref="rootmap" class="map" />
  </div>
</template>

<script>
import bus from '../common/bus.js'

import 'ol/ol.css'
import {Map, View} from 'ol'
import {defaults as defaultControls} from 'ol/control.js';
import TileLayer from 'ol/layer/Tile'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import {get as getProjection} from 'ol/proj'
import {getWidth, getTopLeft} from 'ol/extent'

export default {
  name: 'OLMap',
  data () {
    return {
      map: null,
      duration: 1000,
      view: {
        projection: 'EPSG:4326',
        center: [118.815185, 36.421875],
        zoom: 8,
        maxZoom: 18
      }
    }
  },
  created () {
    bus.$on('maptool', (msg) => {
      switch (msg){
        case 'mapViewReset':
            this.mapViewReset()
            break
        case 'zoomIn':
            this.zoomIn()
            break
        case 'zoomOut':
          this.zoomOut()
          break
        default:
            break
      }
    })
  },
  mounted () {
    var projection = getProjection('EPSG:4326'),
      projectionExtent = projection.getExtent(),
      size = getWidth(projectionExtent) / 256,
      resolutions = new Array(20),
      matrixIds = new Array(14)
    for (var z = 0; z < 20; z++) {
      resolutions[z] = size / Math.pow(2, z)
      matrixIds[z] = z
    }

    var mapcontainer = this.$refs.rootmap
    this.map = new Map({
      target: 'map',
      controls: defaultControls({zoom: false, attribution: false}).extend([]),
      layers: [
        new TileLayer({
          name: 'vec',
          aliasName: '全国影像图',
          source: new WMTS({
            url: 'http://t{0-6}.tianditu.com/img_c/wmts?tk=acdf02e9d8aea4d35821080c118c390e',
            layer: 'img',
            format: 'tiles',
            matrixSet: 'c',
            style: 'default',

            projection: projection,
            tileGrid: new WMTSTileGrid({
              origin: getTopLeft(projectionExtent),
              resolutions: resolutions,
              matrixIds: matrixIds
            })
          }),
          visible: true
        }),
        new TileLayer({
          name: 'cia',
          aliasName: '影像中文注记',
          source: new WMTS({
            url: 'http://t{0-6}.tianditu.com/cia_c/wmts?tk=acdf02e9d8aea4d35821080c118c390e',
            layer: 'cia',
            format: 'tiles',
            matrixSet: 'c',
            style: 'default',

            projection: projection,
            tileGrid: new WMTSTileGrid({
              origin: getTopLeft(projectionExtent),
              resolutions: resolutions,
              matrixIds: matrixIds
            })
          }),
          visible: true
        })
      ],
      view: new View({
        projection: this.view.projection,
        center: this.view.center,
        zoom: this.view.zoom,
        maxZoom: this.view.maxZoom
      })
    })
  },
  methods: {
    mapViewReset () {
//        let viewOptions = {
//          duration: this.duration,
//          center: this.view.center,
//          zoom: this.view.zoom
//        }
//        this.map.getView().animate(viewOptions)
      layui.use('layer', function(){
        var $ = layui.jquery
        layer.open({
          type: 1,
          closeBtn: 0,
          area: '516px',
          shadeClose: true,
          content: $('.home')
        });
      })
    },
    zoomIn () {
        let view = this.map.getView(),
          zoom = view.getZoom();
      view.setZoom(zoom + 1);
    },
    zoomOut () {
      let view = this.map.getView(),
        zoom = view.getZoom();
      view.setZoom(zoom - 1);
    }
  }
}
</script>

<style scoped>
  .map {
    top:0px;
    margin:0 auto;
    width: 100%;
    height:100%;
    position:absolute;
  }
</style>
