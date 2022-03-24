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
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Users',
        route: '/users',
        icon: 'cil-user',
        items: [
          {
            name: 'All Users',
            to: '/users/all',
            icon: 'cil-user'
        },
          {
            name: 'Active Users',
            to: '/users/active'
          },
          {
            name: 'Block Users',
            to: '/users/block'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Settings',
        to: '/other/setting',
        icon: 'cil-settings',
        items: []
      },
      {
        _name: 'CSidebarNavItem',
        name: 'App Update',
        to: '/other/update',
        icon: 'cil-ban',
        items: []
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Payment Method',
        to: '/configuration/dashboard',
        icon: 'cil-ban',
        items: []
      }
    ]
  }
]