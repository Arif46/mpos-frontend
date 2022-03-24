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
                              <b-col>
                                  <Select @return-value="setReturnData({ sub_category_id : $event})" :input="{ cols: 12, name: ' Sub Category', rules: 'required', vmodel: formData.sub_category_id , options: subCategoryList }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Select @return-value="setReturnData({ brand_id : $event})" :input="{ cols: 12, name: 'Brand', rules: 'required', vmodel: formData.brand_id , options: brandList }"/>
                              </b-col>
                              <b-col>
                                  <Select @return-value="setReturnData({ unit_id : $event})" :input="{ cols: 12, name: ' Unit', rules: 'required', vmodel: formData.unit_id , options: unitList }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Input @return-value="setReturnData({ code: $event})" :input="{ cols: 12, type: 'text', name: 'Code', rules: 'required', vmodel: formData.code }"/>
                              </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ name: $event})" :input="{ cols: 12, type: 'text', name: 'name', rules: 'required', vmodel: formData.name }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Input @return-value="setReturnData({ buying_price: $event})" :input="{ cols: 12, type: 'number', name: 'Buying Price', rules: 'required', vmodel: formData.buying_price }"/>
                              </b-col>
                              <b-col>
                                  <Input @return-value="setReturnData({ selling_price: $event})" :input="{ cols: 12, type: 'number', name: 'Selling Price', rules: 'required', vmodel: formData.selling_price }"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <Input @return-value="setReturnData({ min_stock: $event})" :input="{ cols: 12, type: 'number', name: 'Min Stock', rules: 'required', vmodel: formData.min_stock }"/>
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
import { productStore, productUpdate } from '../../../api/routes'

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
        sub_category_id: '',
        brand_id: '',
        unit_id : '',
        code: '',
        name: '',
        buying_price: '',
        selling_price: '',
        min_stock: '',
        photo: ''
      },
      subCategoryList: []
    }
  },
  computed: {
    categoryList () {
      return this.$store.state.commonObj.categoryList
    },
    brandList () {
       return this.$store.state.commonObj.brandList
    },
    unitList () {
       return this.$store.state.commonObj.unitList
    }
  },
  watch: {
      'formData.category_id': function (newVal, oldVal) {
        this.subCategoryList = this.getSubCategoryList(newVal)
      }
    },
  methods: {
    formSubmit () {
      const result = this.submitHandler(productStore, productUpdate, this.formData)
      result.then(response => {
        this.resultProcess(response)
      })
    },
    getSubCategoryList (categoryId) {
      const subCategoryList = this.$store.state.commonObj.subCategoryList.filter(item => item.value === 1 && item.category_id === categoryId)
      return subCategoryList
    }
  }
}
</script>
