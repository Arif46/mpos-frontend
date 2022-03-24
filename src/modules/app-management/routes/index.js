  const routes = [{
    path: '/app-management',
    name: 'app-management',
    component: () =>import('@/containers/AppManagement'),
    meta: { auth: true },
    children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/Dashboard'),
          meta: {
            requiresAuth: true,
            name: 'dashboard'
          }
        },
        {
          path: 'users',
          name: 'user-list',
          component: () => import('../views/user/List'),
          meta: {
            requiresAuth: true,
            name: 'user-list'
          }
        },
        {
          path: 'roles',
          name: 'role-list',
          component: () => import('../views/role/List'),
          meta: {
            requiresAuth: true,
            name: 'role-list'
          }
        },
        {
          path: 'permissions',
          name: 'permission-list',
          component: () => import('../views/permission/List'),
          meta: {
            requiresAuth: true,
            name: 'permission-list'
          }
        },
        {
          path: 'branch',
          name: 'branch-list',
          component: () => import('../views/branch/List'),
          meta: {
            requiresAuth: true,
            name: 'branch-list'
          }
        },
        {
          path: 'station',
          name: 'station-list',
          component: () => import('../views/station/List'),
          meta: {
            requiresAuth: true,
            name: 'station-list'
          }
        },
        {
          path: 'company',
          name: 'company-list',
          component: () => import('../views/user/List'),
          meta: {
            requiresAuth: true,
            name: 'company-list'
          }
        }
    ]
}]
export default routes
