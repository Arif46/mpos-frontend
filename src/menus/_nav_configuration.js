export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'sidebar.dashboard',
        to: '/configuration/dashboard',
        icon: 'cil-speedometer',
        items: []
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Product Management',
        icon: 'cil-dollar',
        items: [
          {
            name: ' - Category',
            to: '/configuration/product/category'
          },
          {
            name: ' - Sub Category',
            to: '/configuration/product/sub-category'
          },
          {
            name: ' - Brands',
            to: '/configuration/product/brand'
          },
          {
            name: ' - Units',
            to: '/configuration/product/units'
          },
          {
            name: ' - Properties',
            to: '/configuration/product/properties'
          },
          {
            name: ' - Product',
            to: '/configuration/product/product'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Customer Setting',
        icon: 'cil-dollar',
        items: [
            {
                name: '- Customer Type',
                to: '/configuration/product/customer-setting/customer-type'
            },
            {
                name: '- Customer',
                to: '/configuration/product/customer-setting/customer'
            }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Supplier Setting',
        icon: 'cil-dollar',
        items: [
            {
                name: 'Supplier',
                to: '/configuration/product/supplier-setting/supplier'
            },
            {
                name: 'Supplier Payment',
                to: '/configuration/product/supplier-setting/supplier-payment'
            },
            {
                name: 'Payable Report',
                to: '/configuration/product/supplier-setting/payable-report'
            },
            {
                name: 'Paid Report',
                to: '/configuration/product/supplier-setting/paid-report'
            }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Account Settings',
        route: '/withdraw',
        icon: 'cil-dollar',
        items: [
            {
            name: 'Card Type',
            to: '/configuration/card-type'
            },
            {
            name: 'Customer Bank',
            to: '/configuration/customer-bank'
            },
            {
            name: 'Point Setting',
            to: '/configuration/point-setting'
            }
        ]
      }
    ]
  }
]