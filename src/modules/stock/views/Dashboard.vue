<template>
  <div>
    <CRow>
      <CCol sm="12" md="12">
        <CCard accent-color="success">
          <CCardHeader><b> Users Register</b></CCardHeader>
            <CCardBody>
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-primary p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z" class="ci-primary"></path>
                                    <polygon fill="var(--ci-primary-color, currentColor)" points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400" class="ci-primary"></polygon>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Today </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.today_user).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-info p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z" class="ci-primary"></path>
                                    <polygon fill="var(--ci-primary-color, currentColor)" points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400" class="ci-primary"></polygon>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Previous Day </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.previous_day_user).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-warning p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z" class="ci-primary"></path>
                                    <polygon fill="var(--ci-primary-color, currentColor)" points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400" class="ci-primary"></polygon>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Last 7 Day </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.last_seven_day_user).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-danger p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z" class="ci-primary"></path>
                                    <polygon fill="var(--ci-primary-color, currentColor)" points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400" class="ci-primary"></polygon>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> This Month </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.this_month_user).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12" md="12">
        <CCard accent-color="success">
          <CCardHeader><b> Task Completed</b></CCardHeader>
            <CCardBody>
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-primary p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z" class="ci-primary"></path>
                                    <path fill="var(--ci-primary-color, currentColor)" d="M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z" class="ci-primary"></path>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Today </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.today_task).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-info p-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z" class="ci-primary"></path>
                                    <path fill="var(--ci-primary-color, currentColor)" d="M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z" class="ci-primary"></path>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Previous Day </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.previous_day_task).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-warning p-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z" class="ci-primary"></path>
                                    <path fill="var(--ci-primary-color, currentColor)" d="M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z" class="ci-primary"></path>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> Last 7 Day </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.last_seven_day_task).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body d-flex align-items-center p-0">
                                <div class="mr-3 text-white bg-gradient-danger p-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon c-icon-custom-size" height="36">
                                    <path fill="var(--ci-primary-color, currentColor)" d="M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z" class="ci-primary"></path>
                                    <path fill="var(--ci-primary-color, currentColor)" d="M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z" class="ci-primary"></path>
                                    </svg>
                                </div>
                                <div>
                                <div class="text-muted text-uppercase font-weight-bold"> This Month </div>
                                <div class="text-value text-gradient-primary">{{ parseFloat(formData.this_month_task).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import RestApi, { baseUrl } from '../../../config/api_config'
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
        loadData () {
            const params = {}
            this.$store.dispatch('mutedLoad', { loading: true})
            RestApi.getData(baseUrl, 'api/dashboard/data', params).then(response => {
                if (response.success) {
                    this.formData = response.data
                }
                this.$store.dispatch('mutedLoad', { loading: false })
            })
        },
  }
}
</script>
