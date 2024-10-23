import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from '../Mobile-sidebar/MobileSidebar'

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <MobileSidebar />
            <div className='flex w-full justify-end'>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}

export default Navbar
