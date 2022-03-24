  const routes = [{
    path: '/report',
    name: 'report',
    component: () =>import('@/containers/Report'),
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