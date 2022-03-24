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
                                  <Input @return-value="setReturnData({ code: $event})" :input="{ cols: 12, type: 'text', name: 'Code', rules: 'required', vmodel: formData.code }"/>
                                </b-col>
                                <b-col>
                                  <Input @return-value="setReturnData({ name: $event})" :input="{ cols: 12, type: 'text', name: 'Name', rules: 'required', vmodel: formData.name }"/>
                                </b-col>
                            </b-row>
                             <b-row>
                                <b-col>
                                  <Input @return-value="setReturnData({ email: $event})" :input="{ cols: 12, type: 'text', name: 'Email', rules: 'required', vmodel: formData.email }"/>
                                </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ mobile: $event})" :input="{ cols: 12, type: 'number', name: 'Mobile', rules: 'required', vmodel: formData.mobile }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                  <Input @return-value="setReturnData({ bank_name: $event})" :input="{ cols: 12, type: 'text', name: 'Bank Name', rules: 'required', vmodel: formData.bank_name }"/>
                                </b-col>
                                <b-col>
                                  <Input @return-value="setReturnData({ account_no: $event})" :input="{ cols: 12, type: 'text', name: 'Account No', rules: 'required', vmodel: formData.account_no }"/>
                                </b-col>
                            </b-row>    
                            <b-row>    
                                <b-col>
                                  <TextArea @return-value="setReturnData({ address: $event})" :input="{ cols: 12, type: 'text', name: 'address', rules: '', vmodel: formData.address }"/>
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
import Input from '../../../../../components/common/Input'
import Select from '../../../../../components/common/Select'
import Radio from '../../../../../components/common/Radio'
import TextArea from '../../../../../components/common/TextArea'
import commonForm from '@/mixins/common-form'
import { supplierStore, supplierUpdate } from '../../../api/routes'

export default {
  mixins: [commonForm],
  props: ['id'],
  components: {
    ValidationObserver,
    Input,
    Select,
    Radio,
    TextArea
  },
  created () {
      if (this.id) {
        this.formData = this.getItem()
      }
  },
  data () {
    return {
      formData: {
        code: '',
        name: '',
        email: '',
        mobile: '',
        bank_name: '',
        account_no: '',
        address: ''
      }
    }
  },
  computed: {
  },
  methods: {
    async formSubmit () {
      const result = this.submitHandler(supplierStore, supplierUpdate, this.formData)
      result.then(response => {
        this.resultProcess(response)
      })
    }
  }
}
</script>
