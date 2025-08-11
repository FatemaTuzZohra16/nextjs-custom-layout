import React from 'react'
import CustomLink from '../componants/CustomLink'

export default function DashbordLayout({ children }) {
    return (
        <div>
            <nav>
                <ul className='flex gap-x-[20px] font-bold text-[22px] pl-[30px] py-[15px] cursor-pointer'>
                    <li><CustomLink path='/dashbord/setting'>Setting</CustomLink></li>
                    <li><CustomLink path='/dashbord/analytics'>Analytics</CustomLink></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
