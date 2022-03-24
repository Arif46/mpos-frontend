<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12" sm="12">
        <b-row>
            <b-col lg="12" sm="12">
                <b-overlay :show="loading">
                    <ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
                        <b-form  @submit.prevent="handleSubmit(formSubmit)" @reset.prevent="reset" >
                            <b-row>
                              <b-col md="12">
                                  <Select @return-value="setReturnData({ branch_id: $event})" :input="{ cols: 12, name: 'branch_id', rules: 'required', vmodel: formData.branch_id, options: branchList }"/>
                              </b-col>
                              <b-col md="12">
                                  <Input @return-value="setReturnData({ name: $event})" :input="{ cols: 12, type: 'text', name: 'name', rules: 'required', vmodel: formData.name }"/>
                              </b-col>
                            </b-row>
                            <div class="row mt-4 mb-3">
                                <div class="col-md-12 text-right">
                                    <button class="vodal-confirm-btn mr-3" @click="show = false">{{ saveBtnName }}</button>
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
import Select from '../../../../components/common/Select'
import Input from '../../../../components/common/Input'
import commonForm from '@/mixins/common-form'

export default {
  mixins: [commonForm],
  props: ['id'],
  components: {
    ValidationObserver,
    Input,
    Select
  },
  created () {
      if (this.id) {
        this.formData = this.getItem()
      }
  },
  data () {
    return {
      formData: {
        branch_id: '',
        name: ''
      }
    }
  },
  computed: {
    branchList () {
      return this.$store.state.commonObj.branchList
    }
  },
  methods: {
    formSubmit () {
      const result = this.submitHandler('station/store', 'station/update', this.formData)
      result.then(response => {
        this.resultProcess(response)
      })
    }
  }
}
</script>
