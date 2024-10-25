import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const [sidebar, setSidebar] = useState(true);

    function changeSidebar(state){
        setSidebar(state);
        props.setSiderbar(state);
    }

    return (
        <>
            <i className={`bi bi-list open ${sidebar && 'hide'}`} onClick={() => changeSidebar(true)} />
            <div className={`sidebar-container ${!sidebar && 'hide'}`}>
                <i className='bi bi-chevron-double-left close' onClick={() => changeSidebar(false)} />
                <hr className='horizontal-line' />
                <div className='menu-content'>
                    <div className='menu'><i className='bi bi-speedometer' /> Dashboard</div>
                    <div className='menu'><i className='bi bi-card-list' /> View Visitor</div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
