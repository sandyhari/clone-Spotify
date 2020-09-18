import React from 'react'
import "./Sidebar.css"
import avatar from "../images/sideBaravatar.jpg"
import SidebarOption from './SidebarOption'
import PlayCircleFilledWhiteSharpIcon from '@material-ui/icons/PlayCircleFilledWhiteSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import QueueMusicSharpIcon from '@material-ui/icons/QueueMusicSharp';
import { useRecoilValue } from 'recoil';
import { globalplaylists } from "../recoiled/recoil"

function Sidebar() {

    const customPlaylist = useRecoilValue(globalplaylists);
    
    return (
        <div className="sidebar">
            <img className="sidebar__avatar" src={avatar} alt="side" />
            <SidebarOption Icon={HomeWorkSharpIcon} title="Home"/>
            <SidebarOption Icon={VideoLibrarySharpIcon}  title="Playlist"/>
            <SidebarOption Icon={QueueMusicSharpIcon}  title="Library"/>
            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
{
    customPlaylist ?.items?.map((playlist,value) =>(
        <SidebarOption key={value} title={playlist.name} />
    ))
}

        </div>
    )
}

export default Sidebar
