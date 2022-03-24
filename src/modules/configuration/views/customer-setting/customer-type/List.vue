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
                        <strong>Customer Type List</strong>
                    </div>
                    <div class="col-md-6 text-right">
                        <button class="btn btn-primary btn-font" @click="editId = ''" v-b-modal.modal-1><i class="ri-add-line"></i> Add New</button>
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
                                <b-button title="Edit" class="pl-1 pt-0 pr-1 pb-0 btn btn-info ml-1 btn-sm" @click="edit(data.item)"><i class="ri-edit-line"></i></b-button>
                                <b-button title="Active/Inactive" class="pl-1 pt-0 pr-1 pb-0 btn btn-danger ml-1 btn-sm" @click="changeStatus(data.item)"> <i class="ri-close-circle-line"></i> </b-button>
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
        <p class="vheader">Customer Type Entry</p>
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
import { customerTypeList, customerTypeStatus } from '../../../api/routes'

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
            name: ''
        },
        editId: ''
      }
    },
    computed: {
        fields () {
            const labels = [
                { label: 'Sl No', class: 'text-center' },
                { label: 'Name', class: 'text-center' },
                { label: 'Discount', class: 'text-center' },
                { label: 'Status', class: 'text-center' },
                { label: 'Action', class: 'text-center' }
            ]

            let keys = []
            keys = [
            { key: 'index' },
            { key: 'name' },
            { key: 'discount' },
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
			RestApi.getData(baseUrl, customerTypeList, params).then(response => {
				if (response.success) {
					this.$store.dispatch('setList', response.data.data)
					this.paginationData(response.data)
				}
			    this.$store.dispatch('mutedLoad', { loading: false })
			})
		},
        changeStatus (item) {
            this.toggleStatus(customerTypeStatus, item)
        }
	}
}
</script>