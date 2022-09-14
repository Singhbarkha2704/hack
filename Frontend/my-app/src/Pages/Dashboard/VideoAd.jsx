import React, { Fragment } from 'react';
import diwalisale from '../../assets/video/diwali-offers.mp4'

const VideoAd = () => {
  return (
    <Fragment>
          <div>
              
            <video autoPlay controls loop muted width="70%" height='10%' style={{margin:'90px'}}>
                <source src={diwalisale} type="video/mp4" />
            </video>
          </div>      
    </Fragment>
  )
}

export default VideoAd