export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'sidebar.dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        items: []
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Withdraw',
        route: '/withdraw',
        icon: 'cil-dollar',
        items: [
          {
            name: 'Pending List',
            to: '/withdraw/pending'
        },
          {
            name: 'Approve List',
            to: '/withdraw/approve'
          },
          {
            name: 'Reject List',
            to: '/withdraw/reject'
          },
          {
            name: 'All List',
            to: '/withdraw/all'
        }
        ]
      }
    ]
  }
]