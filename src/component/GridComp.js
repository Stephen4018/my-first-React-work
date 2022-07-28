import React from 'react'
import "./grid.scss"

const GridComp = () => {
  return (
    <div className='grid-container'>
        <header className='gird-item'>
          <div className=''>Logo</div>
          <nav>Navi</nav>
        </header>
        <nav className='gird-item'>Navigation</nav>
        <main className='gird-item'>Main content</main>
        <aside className='gird-item'>Aside</aside>
        <footer className='gird-item'>Footer</footer>
       
    </div>
  )
}

export default GridComp 