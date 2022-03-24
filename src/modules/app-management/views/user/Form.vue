<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12" sm="12">
        <b-row>
            <b-col lg="12" sm="12">
                <b-overlay :show="false">
                    <ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
                        <b-form  @submit.prevent="handleSubmit(formSubmit)" @reset.prevent="reset" >
                            <b-row>
                              <b-col>
                                  <Radio @return-value="setReturnData({ type: $event})" :input="{ cols: 12, name: 'type', rules: 'required', vmodel: formData.type, options: typeList }"/>
                              </b-col>
                              <b-col>
                                  <Select @return-value="setReturnData({ branch_id: $event})" :input="{ cols: 12, name: 'branch_id', rules: 'required', vmodel: formData.branch_id, options: branchList }"/>
                              </b-col>
                              <b-col>
                                  <Select @return-value="setReturnData({ station_id: $event})" :input="{ cols: 12, name: 'station_id', rules: 'required', vmodel: formData.station_id, options: stationList }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Input @return-value="setReturnData({ name: $event})" :input="{ cols: 12, type: 'text', name: 'name', rules: 'required', vmodel: formData.name }"/>
                              </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ mobile: $event})" :input="{ cols: 12, type: 'text', name: 'mobile', rules: 'required', vmodel: formData.mobile }"/>
                              </b-col>
                               <b-col>
                                  <Input @return-value="setReturnData({ nid: $event})" :input="{ cols: 12, type: 'text', name: 'nid', rules: '', vmodel: formData.nid }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                               <b-col>
                                  <Input @return-value="setReturnData({ salary: $event})" :input="{ cols: 12, type: 'text', name: 'salary', rules: 'required', vmodel: formData.salary }"/>
                              </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ email: $event})" :input="{ cols: 12, type: 'email', name: 'email', rules: 'required|email', vmodel: formData.email }"/>
                              </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ password: $event})" :input="{ cols: 12, type: 'password', name: 'password', rules: id ? '' : 'required', vmodel: formData.password }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col md="4">
                                  <Input @return-value="setReturnData({ join_date: $event})" :input="{ cols: 12, type: 'date', name: 'join_date', rules: '', vmodel: formData.join_date }"/>
                              </b-col>
                              <b-col md="6">
                                  <TextArea @return-value="setReturnData({ address: $event})" :input="{ cols: 12, type: 'text', name: 'address', rules: '', vmodel: formData.address }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col md="12">
                                  <Checkbox @return-value="setReturnData({ roles: $event})" :input="{ cols: 12, name: 'roles', rules: 'required', vmodel: formData.roles, options: roleList }"/>
                              </b-col>
                            </b-row>
                            <div class="row mt-4 mb-3">
                                <div class="col-md-12 text-right">
                                    <button class="vodal-confirm-btn mr-3" @click="show = false">Save</button>
                                    <button type="button" class="vodal-cancel-btn" @click="$bvModal.hide('modal-1')">close</button>
                                </div>
                            </div>
                        </b-form>
                    </ValidationObserver>
                </b-overlay>
            </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import Input from '../../../../components/common/Input'
import Select from '../../../../components/common/Select'
import Radio from '../../../../components/common/Radio'
import TextArea from '../../../../components/common/TextArea'
import Checkbox from '../../../../components/common/Checkbox'
import commonForm from '@/mixins/common-form'

export default {
  mixins: [commonForm],
  props: ['id'],
  components: {
    ValidationObserver,
    Input,
    Select,
    Radio,
    TextArea,
    Checkbox
  },
  created () {
      if (this.id) {
        const tmp = this.getItem()
        const roles = tmp.roles.map(item => {
          return item.name
        })
        this.formData = Object.assign({}, tmp, { roles: roles })
      }
  },
  data () {
    return {
      formData: {
        type: 1,
        branch_id: '',
        station_id: '',
        name: '',
        mobile: '',
        nid: '',
        salary: '',
        email: '',
        password: '',
        join_date: '',
        address: '',
        roles: []
      }
    }
  },
  computed: {
    branchList () {
      return this.$store.state.commonObj.branchList
    },
    stationList () {
      return this.$store.state.commonObj.stationList
    },
    roleList () {
      return this.$store.state.commonObj.roleList
    },
    stationList () {
      return this.$store.state.commonObj.stationList
    },
    typeList () {
      return this.$store.state.commonObj.typeList
    }
  },
  methods: {
    formSubmit () {
      const result = this.submitHandler('users/store', 'users/update', this.formData)
      result.then(response => {
        this.resultProcess(response)
      })
    }
  }
}
</script>
