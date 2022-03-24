<template>
<div>
    <CRow>
    <CCol>
        <CCard>
            <CCardBody class="p-4">
                <b-row>
                    <b-col>
                        <ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
                            <b-form  @submit.prevent="handleSubmit(searchData)" @reset.prevent="reset" >
                              <b-row>
								<b-col xs="12" sm="12" md="4" lg="4" xl="4">
									<b-form-group
										class="row"
										label-cols-sm="12"
										label-for="supplier_name"
										>
										<template v-slot:label>
											Supplier Name
										</template>
										<b-form-select
											plain
											v-model="search.supplier_name"
											text="text"
											:options="customerTypeList"
											id="supplier_name"
											>
											<template v-slot:first>
											<b-form-select-option :value="0" >Select</b-form-select-option>
											</template>
										</b-form-select>
									</b-form-group>
								</b-col>
								<b-col xs="12" sm="12" md="4" lg="4" xl="4">
									<b-form-group
										class="row"
										label-cols-sm="12"
										label-for="user_name"
										>
										<template v-slot:label>
											User Name
										</template>
										<b-form-select
											plain
											v-model="search.user_name"
											text="text"
											:options="userList"
											id="user_name"
											>
											<template v-slot:first>
											<b-form-select-option :value="0" >Select</b-form-select-option>
											</template>
										</b-form-select>
									</b-form-group>
								</b-col>
								<b-col xs="12" sm="12" md="4" lg="4" xl="4">
                                    <ValidationProvider name="Start Date" vid="start_date" rules="required">
                                        <b-form-group
                                            class="row"
                                            label-cols-sm="12"
                                            label-for="start_date"
                                            slot-scope="{ valid, errors }"
                                        >
                                            <template v-slot:label>
                                                Start Date <span class="text-danger">*</span>
                                            </template>
                                            <b-form-input class="form-control"
                                                v-model="search.start_date"
                                                placeholder="Select Date"
                                                id="start_date"
                                                :state="errors[0] ? false : (valid ? true : null)"
                                            ></b-form-input>
                                            <div class="invalid-feedback">
                                                {{ errors[0] }}
                                            </div>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
								 <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                                    <ValidationProvider name="End Date" vid="end_date" rules="required">
                                        <b-form-group
                                            class="row"
                                            label-cols-sm="12"
                                            label-for="end_date"
                                            slot-scope="{ valid, errors }"
                                        	>
                                            <template v-slot:label>
                                                Start Date <span class="text-danger">*</span>
                                            </template>
                                            <b-form-input class="form-control"
                                                v-model="search.end_date"
                                                placeholder="Select Date"
                                                id="end_date"
                                                :state="errors[0] ? false : (valid ? true : null)"
                                            ></b-form-input>
                                            <div class="invalid-feedback">
                                                {{ errors[0] }}
                                            </div>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col xs="12" sm="12" md="4" lg="4" xl="4">    
                                    <div style="margin-top:37px">
                                        <b-button type="submit" variant="primary">Search</b-button>
                                    </div>
                                </b-col>    
                              </b-row>      
                            </b-form>
                        </ValidationObserver>
                    </b-col>
                </b-row>
            </CCardBody>
        </CCard>
    </CCol>
  </CRow>
</div>
</template>
<script>

import { ValidationObserver } from 'vee-validate'
import flatpickr from 'flatpickr'

export default {
    components: {
        ValidationObserver
    },
    data() {
      return {
        search: {
            supplier_name: 0,
            user_name: 0,
            start_date: null,
            end_date: null
        },
        pagination: {
            perPage: 10,
            currentPage: 1,
            total: 0
        },
        editId: ''
      }
    },
	created () {
        this.loadData ()
    },
	mounted () {
    	flatpickr('#start_date', {})
    	flatpickr('#end_date', {})
  	},
    computed: {
        itemList () {
            return []
        }
    },
    methods: {
    }
}
</script>