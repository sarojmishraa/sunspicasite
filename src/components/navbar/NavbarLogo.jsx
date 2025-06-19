import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const NavbarLogo = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
          <span className="sr-only">user menu</span>
          <img
            alt="User icon"
            src="/public/images/icon.png"
            className="h-8 w-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        className="absolute  mt-4 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-900' : ''} text-white`}
            >
              Your Profile
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-900' : ''} text-white`}
            >
              Settings
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-900' : ''} text-white`}
            >
              Sign In
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-900' : ''} text-white`}
            >
              Sign out
            </a>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default NavbarLogo;