const state = {
	commonObj: {
		hasDropdownLoaded: true,
		typeList: [
			{
			  text: 'Employee',
			  value: 1
			},
			{
			  text: 'Investor',
			  value: 2
			}
		],
		permissions: [],
		branchList: [],
		stationList: [],
		permissionList: [],
		roleList: [],
		categoryList:  [],
		subCategoryList: [],
		brandList: [],
		unitList: [],
		propertieList: [],
		customerList: [],
		customerTypeList: [],
		supplierList: []
	},
	token: localStorage.getItem('access_token') || '',
	user: '',
	sidebarMinimize: false,
	module_id: 0,
	lang: 'en', 
	allMessage:[],
	static: {
		loading: false,
		listReload: false,
		perPage: 10,
        dateFormat: 'DD/MM/YYYY',
        fiscaleYear: 'YYYY-YYYY',
        timeFormat: 'h:m',
        unitOfTime: 'day'
	},
	list: []
} 
export default state