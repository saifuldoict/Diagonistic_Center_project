import React from 'react'
import {Link} from 'react-router-dom'
export const BannerBox = (props) => {
  return (
    <div className="box bannerBox ">
        <Link to={"/"}>
        <img src={props.img} className='w-full' alt="banner"></img>
        </Link>            
    </div>
  )
}
