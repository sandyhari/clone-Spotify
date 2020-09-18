import React,{useState} from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {globaluser,globalplaylists} from "../recoiled/recoil"
import {useRecoilValue} from "recoil"

function Header({spotify}) {
const [input, setInput] = useState("") 
const user = useRecoilValue(globaluser);
console.log("header",user)
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="search artists,podcasts.." value={input} onChange={(event)=>setInput(event.target.value)}/>
            </div>
            <div className="header__right">
                <Avatar src={user.user?.images[0]?.url} alt="HR" />
                <h4>{user.user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
