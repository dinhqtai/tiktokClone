'use client'
import React from 'react'
import TopNav from './includes/TopNav'
import SideNavMain from './includes/SideNavMain'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="bg-[#F8F8F8] h-[100vh]">
                <TopNav />
                <div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 max-w-[1140px]`}>
                    <SideNavMain />
                    {children}
                </div>
            </div>
        </div >
    )
}

export default MainLayout