  const routes = [{
    path: '/stock',
    name: 'stock',
    component: () =>import('@/containers/Stock'),
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