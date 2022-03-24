import RestApi, { baseUrl } from '../config/api_config'

export default {
  computed: {
    hasAllDropdownLoaded () {
      return this.$store.state.commonObj.hasDropdownLoaded
    }
  },
  watch: {
    hasAllDropdownLoaded: function (newValue) {
      if (!newValue) {
        this.loadCommonDropdown()
      }
    },
  },
  created () {
    // Loading common dropdowns
    const hasDropdownLoaded = this.$store.state.commonObj.hasDropdownLoaded
    if (!hasDropdownLoaded || window.performance) {
      this.loadCommonDropdown()
    }
  },
  methods: {
    loadCommonDropdown () {
      RestApi.getData(baseUrl, 'common-dropdowns', null).then(response => {
        if (response.success) {
          this.$store.commit('mutateDropdown', {
            hasDropdownLoaded: true,
            permissions: response.data.permissions,
            branchList: response.data.branchList,
            stationList: response.data.stationList,
            permissionList: response.data.permissionList,
            roleList: response.data.roleList,
            categoryList: response.data.categoryList,
            subCategoryList: response.data.subCategoryList,
            brandList: response.data.brandList,
            unitList: response.data.unitList,
            propertieList: response.data.propertieList,
            customerList: response.data.customerList,
            customerTypeList: response.data.customerTypeList,
            supplierList: response.data.supplierList
          })
        }
      })
    }
  }
}
