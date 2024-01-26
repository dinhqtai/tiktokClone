'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MenuItem from './MenuItem'

type Props = {}

const SideNavMain = (props: Props) => {
    const pathname = usePathname()
    return (
        <div>
            <div id='SideNavMain' className={`fixed z-20 bg-white pt-[70px] lg:border-r-0 border-r w-[75px] overflow-auto ${pathname === '/' ? "lg:w-[310px]" : 'lg:w-[220px]'}`}>
                <div className='lg:w-full w-[55px] mx-auto'>
                    <Link href={`/`}>
                        <MenuItem
                            iconString="For You"
                            colorString={pathname === '/' ? "#F02C56" : ""}
                            sizeString="25"
                        />
                    </Link>
                    <MenuItem
                        iconString="Following"
                        colorString="#000000"
                        sizeString="25"
                    />
                    <MenuItem
                        iconString="Live"
                        colorString="#000000"
                        sizeString="25"
                    />
                </div>
            </div>
        </div>
    )
}

export default SideNavMain