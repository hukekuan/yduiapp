/**
 * Created by hukekuan on 2019/2/1.
 */
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
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
}

export default {
  ActionSheet,
  Button,
  ButtonGroup,
  CellGroup,
  CellItem,
  Icons,
  ListTheme,
  ListItem,
  ListOther,
  GridsGroup,
  GridsItem,
  TabBar,
  TabBarItem,
  Badge,
  Layout,
  Slider,
  SliderItem,
  Confirm,
  Alert,
  Toast,
  Notify,
  Loading
}
