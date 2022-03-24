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
                                  <Select @return-value="setReturnData({ category_id: $event})" :input="{ cols: 12, name: 'Category', rules: 'required', vmodel: formData.category_id, options: categoryList }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Input @return-value="setReturnData({ name: $event})" :input="{ cols: 12, type: 'text', name: 'name', rules: 'required', vmodel: formData.name }"/>
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
import Checkbox from '../../../../../components/common/Checkbox'
import commonForm from '@/mixins/common-form'
import { subCategoryStore, subCategoryUpdate } from '../../../api/routes'

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
        this.formData = this.getItem()
      }
  },
  data () {
    return {
      formData: {
        category_id: '',
        name: '',
      }
    }
  },
  computed: {
    categoryList () {
      return this.$store.state.commonObj.categoryList
    }
  },
  methods: {
    formSubmit () {
      const result = this.submitHandler(subCategoryStore, subCategoryUpdate, this.formData)
      result.then(response => {
        this.resultProcess(response)
      })
    }
  }
}
</script>
