  const routes = [{
    path: '/configuration',
    name: 'configuration',
    component: () =>import('@/containers/Configuration'),
    meta: { auth: true },
    children: [
        {
          path: 'dashboard',
          name: 'Popovers',
          component: () => import('../views/Dashboard'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/category',
          name: 'Popovers',
          component: () => import('../views/product-management/category/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/sub-category',
          name: 'Popovers',
          component: () => import('../views/product-management/sub-category/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/brand',
          name: 'Popovers',
          component: () => import('../views/product-management/brand/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/units',
          name: 'Popovers',
          component: () => import('../views/product-management/unit/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/properties',
          name: 'Popovers',
          component: () => import('../views/product-management/propertie/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/product',
          name: 'Popovers',
          component: () => import('../views/product-management/product/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/customer-setting/customer-type',
          name: 'Popovers',
          component: () => import('../views/customer-setting/customer-type/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/customer-setting/customer',
          name: 'Popovers',
          component: () => import('../views/customer-setting/customer/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/supplier-setting/supplier',
          name: 'Popovers',
          component: () => import('../views/supplier-setting/supplier/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/supplier-setting/supplier-payment',
          name: 'Popovers',
          component: () => import('../views/supplier-setting/supplier-payment/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/supplier-setting/payable-report',
          name: 'Popovers',
          component: () => import('../views/supplier-setting/payable-report/List'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'product/supplier-setting/paid-report',
          name: 'Popovers',
          component: () => import('../views/supplier-setting/paid-report/List'),
          meta: {
            requiresAuth: true
          }
        }
        
    ]
}]
export default routes