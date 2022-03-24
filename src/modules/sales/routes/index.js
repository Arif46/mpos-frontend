  const routes = [{
    path: '/sales',
    name: 'sales',
    component: () =>import('@/containers/Sales'),
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