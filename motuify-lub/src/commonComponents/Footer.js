import React from 'react'
import "./Footer.css"

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumInfo" src="https://www.bellybelly.com.au/wp-content/uploads/2013/10/when-do-babies-start-talking-1.jpg" alt="album" />
                <div className="footer__songInfo">
                    <h4>Love is in the AIr</h4>
                    <p>....</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleFilledIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__rights">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer__slider" aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
