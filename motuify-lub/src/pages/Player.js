import React from 'react'
import "./Player.css"
import { useRecoilState, useRecoilValue } from 'recoil'
import Sidebar from '../commonComponents/Sidebar'
import Body from '../commonComponents/Body'
import Footer from '../commonComponents/Footer'


const Player = ({spotify}) => {

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player
{/* sidebar */}
{/* Body */}
{/* footer */}