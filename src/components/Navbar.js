import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/Homepage', current: true },
  { name: 'Employees', href: '/employeeList', current: false},
  { name: 'Project List', href: '/projectList', current: false },
  { name: 'Assign Task', href: '/assignTask', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
 {
  return (
    <Disclosure as="nav" className="bg-gray-800 py-2 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto rounded-full"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-1xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

}
