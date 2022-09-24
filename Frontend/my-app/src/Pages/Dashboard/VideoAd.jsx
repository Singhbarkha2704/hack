import React, { Fragment } from 'react';
import mobileRotate from '../../assets/video/Smartphone - 28660.mp4'

const VideoAd = () => {
  return (
    <Fragment>
          <div>
              
            <video autoPlay controls loop muted width="70%" height='10%' style={{margin:'90px'}}>
                <source src={mobileRotate} type="video/mp4" />
            </video>
          </div>      
    </Fragment>
  )
}

export default VideoAd