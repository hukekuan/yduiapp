<template>
  <div id="map" ref="rootmap" class="map" />
</template>

<script>
  import 'ol/ol.css'
  import {Map, View} from 'ol'
  import TileLayer from 'ol/layer/Tile'
  import WMTS from 'ol/source/WMTS'
  import WMTSTileGrid from 'ol/tilegrid/WMTS'
  import {get as getProjection} from 'ol/proj'
  import {getWidth, getTopLeft} from 'ol/extent'

  export default {
    name: 'OLMap',
    data() {
      return {
        map: null
      };
    },
    mounted() {
      var projection = getProjection("EPSG:4326"),
        projectionExtent = projection.getExtent(),
        size = getWidth(projectionExtent) / 256,
        resolutions = new Array(20),
        matrixIds = new Array(14)
      for (var z = 0; z < 20; z++) {
        resolutions[z] = size / Math.pow(2, z);
        matrixIds[z] = z;
      }

      var mapcontainer = this.$refs.rootmap
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            name: "vec",
            aliasName: "全国影像图",
            source: new WMTS({
              url: 'http://t{0-6}.tianditu.com/img_c/wmts?tk=acdf02e9d8aea4d35821080c118c390e',
              layer: 'img',
              format: 'tiles',
              projection: projection,
              tileGrid: new WMTSTileGrid({
                origin: getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
              }),
              matrixSet: "c",
              style: 'default'
            }),
            visible: true
          }),
          new TileLayer({
            name: "cia",
            aliasName: "影像中文注记",
            source: new WMTS({
              url: 'http://t{0-6}.tianditu.com/cia_c/wmts?tk=acdf02e9d8aea4d35821080c118c390e',
              layer: 'cia',
              format: 'tiles',
              projection: projection,
              tileGrid: new WMTSTileGrid({
                origin: getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
              }),
              matrixSet: "c",
              style: 'default'
            }),
            visible: true
          }),
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [118.815185, 36.421875],
          zoom: 8
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    top:0px;
    margin:0 auto;
    width: 100%;
    height:100%;
    position:absolute;
  }
</style>
