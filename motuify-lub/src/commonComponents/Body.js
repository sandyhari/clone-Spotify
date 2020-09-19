import React from 'react'
import { useRecoilValue } from 'recoil';
import {globaldiscover} from "../recoiled/recoil"
import "./body.css";
import Header from "./Header"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SongRow from "./SongRow"

function Body({spotify}) {

    const discoveryWeekly = useRecoilValue(globaldiscover)

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src="https://www.adweek.com/wp-content/uploads/files/spotify-discover-weekly-ep-2016.png" alt="img" />
                <div className="body__infotext">
                    <strong>Personally for u</strong>
                    <h2>In this boring Lucknow travel</h2>
                    <p>{discoveryWeekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayArrowIcon fontSize="large" className="body__shuffle"/>
                </div>
            </div>
            {discoveryWeekly?.tracks.items.map(item=>(
                <SongRow track={item.track}/>
            ))}
        </div>
    )
}

export default Body
