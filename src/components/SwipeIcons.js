import React from 'react'
import '../CustomStyles/SwipeIcons.css'
import {Replay, Close, StarRate, Favorite, FlashOn,} from "@material-ui/icons"
import { IconButton } from '@material-ui/core'

function SwipeIcons() {
    return (
        <div className="swipeIcons">
            <IconButton className="swipeIconsRepeat">
                <Replay fontSize="large"/>
            </IconButton>
            <IconButton className="swipeIconsLeft">
                <Close fontSize="large"/>
            </IconButton>
            <IconButton className="swipeIconsStar">
                <StarRate fontSize="large"/>
            </IconButton>
            <IconButton className="swipeIconsRight">
                <Favorite fontSize="large"/>
            </IconButton>
            <IconButton className="swipeIconsLightening">
                <FlashOn fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeIcons
