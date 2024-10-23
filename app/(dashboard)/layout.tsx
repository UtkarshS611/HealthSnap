import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='h-full relative'>
            <div className='hidden text-white h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
                <Sidebar />
            </div>
            <main className='md:ml-72 h-full p-2'>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
