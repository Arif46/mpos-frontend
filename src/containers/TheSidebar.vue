<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
        <img src="/images/logo.png" width="100%" height="55">
    </CSidebarBrand>
    <CRenderFunction flat :content-to-render="navData"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import configNav from '../menus/_nav_configuration'
import StockNav from '../menus/_nav_stock'
import SalesNav from '../menus/_nav_sales'
import ReportNav from '../menus/_nav_report'
import AccountNav from '../menus/_nav_account'
import AppManagementNav from '../menus/_nav_app_management'

export default {
  name: 'TheSidebar',
  configNav,
  StockNav,
  SalesNav,
  ReportNav,
  AccountNav,
  AppManagementNav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    moduleId () {
      return this.$store.state.module_id 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
    navData () {
        let tmpNav;
        if (this.moduleId === 1) {
            tmpNav = this.$options.configNav[0]
        } else if (this.moduleId === 2) {
            tmpNav = this.$options.StockNav[0]
        } else if (this.moduleId === 3) {
            tmpNav = this.$options.SalesNav[0]
        } else if (this.moduleId === 4) {
            tmpNav = this.$options.AccountNav[0]
        } else if (this.moduleId === 5) {
            tmpNav = this.$options.ReportNav[0]
        } else  {
            tmpNav = this.$options.AppManagementNav[0]
        }
      let filterList = []
      const tempData = tmpNav._children.forEach(item => {
        const itemsData = item.items.map(childItem => {
            return{
              name: this.$t(childItem.name),
              to: childItem.to
            }
          })
        let tmpItem = {}
        if (itemsData.length <1) {
           tmpItem = {
            _name: item._name,
            name: this.$t(item.name),
            to: item.to,
            icon: item.icon,
            items: itemsData,
            }
        }else{
           tmpItem = {
            _name: item._name,
            name: this.$t(item.name),
            route: item.route,
            icon: item.icon,
            items: itemsData,
            }
        }
        if (true) {
          filterList.push(tmpItem)
        }
      })

      return  [
          {
            _name: 'CSidebarNav',
            _children: filterList
          }
        ]
      }
  }
}
</script>
