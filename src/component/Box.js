import React from 'react'

import {arrCollection, objCollection} from '../photos/images.js';

const img_url = 'https://picsum.photos/200';
const BoxComp = () => {
  return (
    <div>
        <h1>Dealing with images</h1>
        <p> No import</p>
        <img src='images/BackgroundImage.png' alt='bg' />
        <img src='logo512.png' alt='nbg' />

        <p>Using the require function</p>
        <img src={require('../photos/logo192.png')} alt='' />

        <p>Using external image links (remote image URL)</p>
        <img src='https://picsum.photos/200' alt='ext_img' />
        <img src={img_url} alt='' />

        <p>Using Images as exported constant - Array </p>
        <img src={arrCollection[0]} alt='obj-img'/>
        <img src={arrCollection[2]} alt='obj-img'/>

        <p>Using Images as exported constant - Object </p>
        <img src={objCollection.logo1} alt='obj-img'/>
        <img src={objCollection.logo3} alt='obj-img'/>

        <p>Mapping</p>
        
    </div>
  )
}

export default BoxComp