import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [usermenu, setUsermenu] = useState(false)

    return (
        <div className='header-container'>
            <h1>QuarterGuard</h1>
            <div className=' right-content'>
                <span 
                    onClick={() => setUsermenu(true)}>Username</span>
                <div className={`menu ${usermenu && 'hide'}`} onClick={() => setUsermenu(false)}>
                    <div className='menu-data'>Account</div>
                    <div className='menu-data'>Notification</div>
                    <div className='menu-data'>Logout</div>
                </div></div>

        </div>
    )
}

export default Header