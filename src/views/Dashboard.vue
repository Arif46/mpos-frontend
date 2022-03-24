<template>
  <div>
    <CRow>
      <CCol sm="12" md="12">
          <h1 class="main-head p-0">Welcome To, Mamun Super Shop</h1>
          <p class="main-address p-0">Mirpur, Dhaka, Bangladesh</p>
          <hr>
      </CCol>
      <CCol sm="12" class="mt-5" md="12">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 1])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                            <img src="images/dashboard/settings.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/configuration/dashboard">Configurations</router-link></div>
                        <span class="text-muted-sm">- Master Configuration Management</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 2])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                            <img src="images/dashboard/stock.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/stock/dashboard">Stocks</router-link></div>
                            <span class="text-muted-sm"> - Stock Management </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 3])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                             <img src="images/dashboard/sales.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/sales/dashboard">Sales</router-link></div>
                        <span class="text-muted-sm">- Process sales and returns</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 4])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                             <img src="images/dashboard/accounts.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/account/dashboard">Accounts</router-link></div>
                        <span class="text-muted-sm"> - Sell, Receiving, Office Accounts Management</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 5])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                            <img src="images/dashboard/reports.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/report/dashboard">Reports</router-link></div>
                        <span class="text-muted-sm">- View and generate reports</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4" @click="$store.commit('setModule', ['module_id', 6])">
                <div class="card">
                    <div class="card-body d-flex align-items-center p-0">
                        <div class="mr-3 text-white bg-gradient-light p-4">
                            <img src="images/dashboard/app-management.png" height="60px" width="60px">
                        </div>
                        <div>
                        <div><router-link class="text-muted" to="/app-management/dashboard">App Management</router-link></div>
                        <span class="text-muted-sm">- Manage your application</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
  },
  data () {
    return {
      selected: 'Month',
      formData: {}
    }
  },
  created() {
      this.loadData()
  },
  methods: {
  }
}
</script>
<style scoped>
.main-head {
    font-size: 25px;
    font-weight: bold;
    color: #1E5A96 !important;
    font-family: "Lucida Grande",Arial;
    text-align: center;
}
.main-address {
    font-size: 15px;
    font-weight: bold;
    color: #1E5A96 !important;
    font-family: "Lucida Grande",Arial;
    text-align: center;
}
.text-muted {
    font-size: 18px;
    font-weight: bold;
    color: #1E5A96 !important;
    font-family: "Lucida Grande",Arial;
    line-height: 50px;
    text-decoration: none;
}
.text-muted-sm {
    font-size: 12px;
    font-weight: bold;
    color: black;
    font-family: "Lucida Grande",Arial;
}
</style>