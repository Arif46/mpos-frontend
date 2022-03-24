<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12" sm="12">
		<b-row>
            <b-col lg="4" sm="12">
                <CCard>
                    <CCardBody>
                        <b-row>
                            <b-col>
                                <div class='text-center'>
                                    <img width='70%' src="/images/profile.png">
                                    <h4>{{ formData.name }}</h4>
                                    <p class="text-primary">{{ formData.email }}</p>
                                </div>
                                <div>
                                    <table class='table table-sm'>
                                        <tr>
                                            <th>Total Point</th>
                                            <td>: {{ formData.point }}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Dollar</th>
                                            <td>: {{ formData.dollar }}</td>
                                        </tr>
                                        <tr>
                                            <th>Paid</th>
                                            <td>: {{ 0 }}</td>
                                        </tr>
                                        <tr>
                                            <th>Member Since</th>
                                            <td>: {{ formData.created_at | dateFormat }}</td>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td> : 
                                                <span v-if='formData.status === 1' class="badge badge-success">Active</span>
                                                <span v-else class="badge badge-danger">block</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="text-center">
                                    <button v-if="formData.status === 2" class="btn btn-sm btn-success mt-1" @click="changeStatus(formData)" style="width:70%"><i class="ri-check-line"></i> Active</button>
                                    <button v-else class="btn btn-sm btn-danger mt-1" @click="changeStatus(formData)" style="width:70%"><i class="ri-close-line"></i> Block</button>
                                    <button v-b-modal.modal-1 class="btn btn-sm btn-warning mt-1" @click="edit(formData)" style="width:70%"><i class="ri-notification-line"></i> Notification</button>
                                </div>
                            </b-col>
                        </b-row>
                    </CCardBody>
                </CCard>
            </b-col>
            <b-col lg="8" sm="12">
                <CCard>
                    <CCardBody>
                        <div>
                            <b-tabs content-class="mt-3">
                                <b-tab title="Info" active>
                                    <table class="table table-sm table-bordered">
                                        <tr>
                                            <td width="30%">User ID</td>
                                            <td> : {{ formData.id }}</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td> : {{ formData.name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td> : {{ formData.email }}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Income Point</td>
                                            <td> : {{ formData.point }}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Dolar</td>
                                            <td> : {{ formData.dollar }}</td>
                                        </tr>
                                        <tr>
                                            <td>Join</td>
                                            <td> : {{ formData.total_refer }}</td>
                                        </tr>
                                        <tr>
                                            <td>Register Date</td>
                                            <td> : {{ formData.created_at | dateFormat }}</td>
                                        </tr>
                                        <tr>
                                            <td>Refer Code</td>
                                            <td> : {{ formData.own_refer_id }}</td>
                                        </tr>
                                    </table>
                                </b-tab>
                                <b-tab title="Change Info">
                                    <UserInfoChange :id="formData.id" />
                                </b-tab>
                            </b-tabs>
                        </div>
                    </CCardBody>
                </CCard>
            </b-col>
		</b-row>
      </b-col>
    </b-row>
    <b-modal id="modal-1"
    size="lg"
	header-bg-variant="primary"
	header-text-variant="light"
    title="Notification" hide-footer>
    <div>
		<Notification :id='editId'/>
  </div>
  </b-modal>
  </b-container>
</template>
<script>
import RestApi, { baseUrl } from '../../config/api_config'
import iziToast from 'izitoast';
import Notification from './Notification'
import UserInfoChange from './UserInfoChange'

export default {
  props: ['id'],
  components: {
    Notification,
    UserInfoChange
    },
  created () {
	if (this.$route.query.id) {
    this.formData = this.getItem()
    }
  },
  data () {
    return {
      saveBtnName: this.id ? 'Update' : 'Save',
      formData: {
		type_id: 0,
        name: ''
      },
      editId: '',
      btn: 'task'
    }
  },
  computed: {
	loading () {
		return this.$store.state.static.loading
	},
	typeList () {
		return [
			{
				value: 1,
				text: 'সিরিজ'
			},
			{
				value: 2,
				text: 'লেখকক্রম'
			},
			{
				value: 3,
				text: 'অন্যান্য'
			}
		]
	}
  },
  methods: {
    setBtn (btnName, CompName) {
        this.btn = btnName
        this.comp = CompName
    },
    edit (item) {
        this.editId = item.id
    },
	getItem () {
		const item = this.$store.state.list.find(item => item.id === parseInt(this.$route.query.id))
		return JSON.parse(JSON.stringify(item))
	},
    changeStatus (item) {
        this.$swal({
            title: 'Are you sure to change status ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            focusConfirm: false
        }).then((result) => {
            if (result.isConfirmed) {
            this.toggleStatus(item)
            }
        })
    },
    toggleStatus (item) {
        RestApi.deleteData(baseUrl, `api/user-signup/user-status/${item.id}`).then(response => {
            if (response.success) {
                const item = this.$store.state.list.find(item => item.id === parseInt(this.$route.query.id))
                if (this.formData.status === 1) {
                    item.status = 2
                } else {
                    item.status = 1
                }
                this.formData = this.getItem()
                iziToast.success({
                    title: 'Success!',
                    message: response.message
                })
            } else {
                iziToast.error({
                    title: 'Error!',
                    message: response.message
                })
            }
        })
    },
  }
}
</script>
