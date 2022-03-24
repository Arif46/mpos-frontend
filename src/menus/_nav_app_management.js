import Permissions from '@/mixins/Permissions'

const navbar = [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'sidebar.dashboard',
        to: '/configuration/dashboard',
        icon: 'cil-speedometer',
        items: [],
        permission: 'app-dashboard'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Users',
        to: '/app-management/users',
        icon: 'cil-people',
        items: [],
        permission: 'user-list'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Roles',
        to: '/app-management/roles',
        icon: 'cil-list',
        items: [],
        permission: 'user-list'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Permissions',
        to: '/app-management/permissions',
        icon: 'cil-list',
        items: [],
        permission: 'permission-list'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Branch',
        to: '/app-management/branch',
        icon: 'cil-list',
        items: [],
        permission: 'branch-list'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Station',
        to: '/app-management/station',
        icon: 'cil-list',
        items: [],
        permission: 'station-list'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Company',
        to: '/app-management/company',
        icon: 'cil-settings',
        items: [],
        permission: 'company-list'
      }
    ]
  }
]
export default navbar