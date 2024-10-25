import React, { useState } from 'react'
import './user_account.css'
import Header from '../../../components/Header/Header'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

const User = () => {
    const [sidebar, setSiderbar] = useState(true)
  return (
    <div className='account-content'>
        <Header />
        <Sidebar setSiderbar={setSiderbar} />
        <div className={`screen-container ${sidebar && 'sidebar'}`}>
            <Dashboard />
        </div>
    </div>
  )
}



export default User