import React from 'react'
import "./grid.scss"

const GridComp = () => {
  return (
    <div className='grid-container'>
        <div className='gird-item'>Header</div>
        <div className='gird-item'>Navigation</div>
        <div className='gird-item'>Main content</div>
        <div className='gird-item'>Aside</div>
        <div className='gird-item'>Footer</div>
       
    </div>
  )
}

export default GridComp 