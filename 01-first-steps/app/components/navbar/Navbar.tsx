import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'


const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

export const Navbar = () => {

  return (
    <nav className="flex items-center flex-wrap bg-blue-800 p-2 m-2">
      <Link href={'/'} className='flex items-center' >
        <HomeIcon className='ml-2' />
        <span className='ml-2'>Logo</span>
      </Link>
      <div className="flex-grow"></div>
      {
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))
      }
    </nav>

  )
}

