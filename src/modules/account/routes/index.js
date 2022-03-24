  const routes = [{
    path: '/account',
    name: 'Account',
    component: () =>import('@/containers/Account'),
    meta: { auth: true },
    children: [
        {
          path: 'dashboard',
          name: 'Popovers',
          component: () => import('../views/Dashboard'),
          meta: {
            requiresAuth: true
          }
        }
    ]
}]
export default routes