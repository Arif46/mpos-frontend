<template>
<div>
    <CRow>
    <CCol>
        <CCard>
            <CCardBody class="">
                <b-row class="p-0 m-0">
                    <b-col class="p-0 m-0">
                        <ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
                            <b-form  @submit.prevent="handleSubmit(searchData)" @reset.prevent="reset" >
                                <div class="row">
                                    <div class="col-md-4">
                                        <b-form-group
                                        class="row"
                                        label-cols-md="3"
                                        label-for="name"
                                        >
                                        <template v-slot:label>
                                        <span class="">Name</span>
                                        </template>
                                        <b-form-input
                                            id="name"
                                            v-model="search.name"
                                            ></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4">
                                        <b-form-group
                                        class="row"
                                        label-cols-md="3"
                                        label-for="email"
                                        >
                                        <template v-slot:label>
                                        <span class="">Email</span>
                                        </template>
                                        <b-form-input
                                            id="email"
                                            v-model="search.email"
                                            ></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4">
                                        <b-form-group
                                        class="row"
                                        label-cols-md="3"
                                        label-for="mobile"
                                        >
                                        <template v-slot:label>
                                        <span class="">Mobile</span>
                                        </template>
                                        <b-form-input
                                            id="mobile"
                                            v-model="search.mobile"
                                            ></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-12 pt-0 mt-0">
                                        <div class="text-right">
                                            <b-button type="submit"  class="btn-font" variant="primary"><i class="ri-search-line"></i> Search</b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-form>
                        </ValidationObserver>
                    </b-col>
                </b-row>
            </CCardBody>
        </CCard>
        <CCard>
            <CCardHeader>
                <div class="row">
                    <div class="col-md-6">
                        <strong>User List</strong>
                    </div>
                    <div class="col-md-6 text-right">
                        <button v-if="$can('user-create')" class="btn btn-primary btn-font" @click="editId = ''" v-b-modal.modal-1><i class="ri-add-line"></i> Add New</button>
                    </div>
                </div>
            </CCardHeader>
            <CCardBody>
                <b-overlay :show="loading">
                    <div class="overflow-auto">
                        <b-table thead-class="bg-light text-dark" emptyText="Data Not Found" small show-empty bordered hover :items="itemList" :fields="fields">
                            <template v-slot:cell(index)="data">
                                {{ data.index + pagination.slOffset }}
                            </template>
                            <template v-slot:cell(created_at)="data">
                                {{ data.item.created_at | dateFormat }}
                            </template>
                            <template v-slot:cell(status)="data">
                                <span class="badge badge-success" v-if="data.item.status">Active</span>
                                <span class="badge badge-danger" v-else>Inactive</span>
                            </template>
                            <template v-slot:cell(action)="data">
                                <b-button v-if="$can('user-view')" title="View" class="pl-1 pt-0 pr-1 pb-0 btn btn-info btn-sm" @click="changeStatus(data.item, 1)"><i class="ri-eye-line"></i></b-button>
                                <b-button v-if="$can('user-edit')" title="Edit" class="pl-1 pt-0 pr-1 pb-0 btn btn-info ml-1 btn-sm" @click="edit(data.item)"><i class="ri-edit-line"></i></b-button>
                                <b-button v-if="$can('user-delete')" title="Active/Inactive" class="pl-1 pt-0 pr-1 pb-0 btn btn-danger ml-1 btn-sm" @click="changeStatus(data.item, 1)"> <i class="ri-close-circle-line"></i> </b-button>
                            </template>
                        </b-table>
                    </div>
                </b-overlay>
                <b-pagination
                class="text-right"
                v-model="pagination.currentPage"
                :total-rows="pagination.total"
                :per-page="pagination.perPage"
                @input="searchData"
                ></b-pagination>
            </CCardBody>
        </CCard>
    </CCol>
  </CRow>
  <transition name="bounce">
    <b-modal id="modal-1"
        size="lg"
        hide-footer hide-header
        >
        <div class="text-right">
            <i class="ri-close-line v-close" @click="$bvModal.hide('modal-1')" aria-hidden="true"></i>
        </div>
        <p class="vheader">User Entry</p>
            <div>
                <Form :id='editId'/>
            </div>
    </b-modal>
  </transition>
</div>
</template>
<script>
import RestApi, { baseUrl } from '@/config/api_config'
import { ValidationObserver } from 'vee-validate'
import Form from './Form'
import commonList from '@/mixins/common-list'

export default {
    mixins: [commonList],
    components: {
        ValidationObserver,
        Form
    },
    created () {
        this.loadData()
    },
    data() {
      return {
        search: {
            name: '',
            email: ''
        },
        editId: ''
      }
    },
    computed: {
        fields () {
            const labels = [
                { label: 'Sl No', class: 'text-center' },
                { label: 'Name', class: 'text-center' },
                { label: 'Store', class: 'text-center' },
                { label: 'Station', class: 'text-center' },
                { label: 'Email', class: 'text-center' },
                { label: 'Mobile', class: 'text-center' },
                { label: 'Type', class: 'text-center' },
                { label: 'Status', class: 'text-center' },
                { label: 'Action', class: 'text-center' }
            ]

            let keys = []
            keys = [
            { key: 'index' },
            { key: 'name' },
            { key: 'branch_name' },
            { key: 'station_name' },
            { key: 'email' },
            { key: 'mobile' },
            { key: 'type_name' },
            { key: 'status' },
            { key: 'action' }
            ]
            return labels.map((item, index) => {
                return Object.assign(item, keys[index])
            })
        }
    },
    methods: {
		loadData () {
			const params = Object.assign({}, this.search, { page: this.pagination.currentPage, per_page: this.pagination.perPage })
			this.$store.dispatch('mutedLoad', { loading: true})
			RestApi.getData(baseUrl, 'users/list', params).then(response => {
				if (response.success) {
					this.$store.dispatch('setList', this.formatData(response.data.data))
					this.paginationData(response.data)
				}
			    this.$store.dispatch('mutedLoad', { loading: false })
			})
		},
        formatData (data) {
            return data.map(item => {
                const branch = this.getStoreData('branchList', item.branch_id)
                const station = this.getStoreData('stationList', item.station_id)
                const type = this.getStoreData('typeList', item.type)
                return Object.assign(item, { branch_name: branch, station_name: station, type_name: type })
            })
        }
	}
}
</script>