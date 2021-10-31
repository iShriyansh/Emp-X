import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Emp X</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">En</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>


                    <img src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png" alt="" className="topAvatar" />


                </div>
            </div>
        </div>
    )
}
