<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12" sm="12">
		<b-row>
			<b-col lg="10" offset-lg="1" sm="12">
				<b-overlay :show="loading">
					<ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
						<b-form  @submit.prevent="handleSubmit(register)" @reset.prevent="reset" >
						<ValidationProvider name="Category" vid="category_id" rules="required">
							<b-form-group
							class="row"
							label-cols-sm="12"
							label-for="category_id"
							slot-scope="{ valid, errors }"
							>
							<template v-slot:label>
							Category <span class="text-danger">*</span>
							</template>
							<b-form-select
							v-model="formData.category_id"
							:state="errors[0] ? false : (valid ? true : null)"
							:options="categoryList">
							</b-form-select>
							<div class="invalid-feedback">
								{{ errors[0] }}
							</div>
							</b-form-group>
							
						</ValidationProvider>
						<ValidationProvider name="Sub Category" vid="sub_category_id" rules="required">
							<b-form-group
							class="row"
							label-cols-sm="12"
							label-for="sub_category_id"
							slot-scope="{ valid, errors }"
							>
							<template v-slot:label>
							Sub Category <span class="text-danger">*</span>
							</template>
							<b-form-select
							v-model="formData.sub_category_id"
							:state="errors[0] ? false : (valid ? true : null)"
							:options="subCategoryList">
							</b-form-select>
							<div class="invalid-feedback">
								{{ errors[0] }}
							</div>
							</b-form-group>
							
						</ValidationProvider>
						<ValidationProvider name="Conent" vid="content_id" rules="required">
							<b-form-group
							class="row"
							label-cols-sm="12"
							label-for="content_id"
							slot-scope="{ valid, errors }"
							>
							<template v-slot:label>
							Conent <span class="text-danger">*</span>
							</template>
							<b-form-select
							v-model="formData.content_id"
							:state="errors[0] ? false : (valid ? true : null)"
							:options="contentList">
							</b-form-select>
							<div class="invalid-feedback">
								{{ errors[0] }}
							</div>
							</b-form-group>
							
						</ValidationProvider>
						<ValidationProvider name="Content" vid="content" rules="required">
							<b-form-group
							class="row"
							label-cols-sm="12"
							label-for="formData"
							slot-scope="{ valid, errors }"
							>
							<template v-slot:label>
							Content <span class="text-danger">*</span>
							</template>
							<b-form-textarea
								id="content"
								rows="6"
								v-model="formData.content"
								:state="errors[0] ? false : (valid ? true : null)"
								></b-form-textarea>
							<div class="invalid-feedback">
								{{ errors[0] }}
							</div>
							</b-form-group>
						</ValidationProvider>
						<div class="row">
							<div class="col-sm-3"></div>
							<div class="col text-right">
							<b-button type="submit" variant="primary" class="mr-2">{{ saveBtnName }}</b-button>
							&nbsp;
							<b-button variant="danger" class="mr-1" @click="$bvModal.hide('modal-1')">Close</b-button>
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
import RestApi, { baseUrl } from '../../config/api_config'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import iziToast from 'izitoast';
export default {
  props: ['id'],
  components: {
    ValidationObserver,
    ValidationProvider
  },
  created () {
	  if (this.id) {
		  this.formData = this.getItem()
	  }
  },
  data () {
    return {
      saveBtnName: this.id ? 'Update' : 'Save',
      formData: {
        category_id: 0,
        sub_category_id: 0,
        content_id: 0,
        content: '',
	  },
		  subCategoryList: [],
		  contentList: []
    }
  },
  computed: {
	  categoryList () {
		return this.$store.state.commonObj.categoryList
	  },
	  loading () {
		return this.$store.state.static.loading
	  }
  },
   watch: {
	  'formData.category_id': function (newVal, oldVal) {
		  if (newVal !== oldVal) {
			  this.subCategoryList = this.getSubCategoryList(newVal)
		  }
	  },
	  'formData.sub_category_id': function (newVal, oldVal) {
		  if (newVal !== oldVal) {
			  this.contentList = this.getContentList(newVal)
		  }
	  }
  },
  methods: {
	getItem () {
		const item = this.$store.state.list.find(item => item.id === parseInt(this.id))
		return JSON.parse(JSON.stringify(item))
	},
    async register () {
      	this.$store.dispatch('mutedLoad', { loading: true, listReload: false })
        let result = null
        if (this.id) {
            result = await RestApi.putData(baseUrl, `${'api/sub-content/update'}/${this.id}`, this.formData)
        } else {
            result = await RestApi.postData(baseUrl,'api/sub-content/store', this.formData)
        }
		this.$store.dispatch('mutedLoad', { loading: false, listReload: true })
		this.$store.dispatch('dropdownLoad', { hasDropdownLoaded: false })
        if (result.success) {
			if (!this.id) {
				this.formData.content = ''
			}			iziToast.success({
				title: 'Success',
				message: result.message
			})
        } else {
            this.$refs.form.setErrors(result.errors)
        }
	},
	getSubCategoryList (Id) {
		return this.$store.state.commonObj.subCategoryList.filter(item => item.category_id === Id)
	},
	getContentList (Id) {
		return this.$store.state.commonObj.contentList.filter(item => item.sub_category_id === Id)
	}
  }
}
</script>
