// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vue-ydui/dist/ydui.base.css'
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet'
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'
import {Icons} from 'vue-ydui/dist/lib.rem/icons'
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list'
import {GridsGroup, GridsItem} from 'vue-ydui/dist/lib.rem/grids'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
import {Badge} from 'vue-ydui/dist/lib.rem/badge'
import {Layout} from 'vue-ydui/dist/lib.rem/layout'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'
import {Input} from 'vue-ydui/dist/lib.rem/input'
import App from './App1'
import axios from 'axios'
import router from './router'
import store from './store'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component(ActionSheet.name, ActionSheet)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)
Vue.component(Icons.name, Icons)
Vue.component(ListTheme.name, ListTheme)
Vue.component(ListItem.name, ListItem)
Vue.component(ListOther.name, ListOther)
Vue.component(GridsGroup.name, GridsGroup)
Vue.component(GridsItem.name, GridsItem)
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(Badge.name, Badge)
Vue.component(Layout.name, Layout)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)
Vue.component(Input.name, Input)
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
}

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
