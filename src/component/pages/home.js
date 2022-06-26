import React from 'react'
 let url =   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2DvkElJoKCxWDNfu3P9m6aXpdpGaATXepw&usqp=CAU';
 let url_2 = 'https://i.pinimg.com/564x/4c/3c/99/4c3c99d64bbb9d6e7775cee51ce22c33.jpg';

function Home() {
  return (
    <div className='home'>
        <div>
        <h1>Welcome <span>to</span></h1>
        <h2>Afro-Culture</h2>
        <p>.......show casing the beauty of black skins</p>
        </div>
        <img src={url} alt= "" />
        <img src={url_2} alt = '' className='url_2' />
    </div>
  )
}

export default Home