import React from 'react'
 let url =   'https://m.media-amazon.com/images/G/01/2022/vans/SP22_Zappos_EVDNT_Boutique_Page_Update_500x740.jpg';
 let url_2 = 'https://dodmzloxz80g8.cloudfront.net/r/500x/wow/uploads/attachment/68715/image/UGG-ADAPTIVE-2-042122.jpg.webp';

function Home() {
  return (
    <div className='home'>
        <div>
        <h1>keep it Yeezy!!!</h1>
        <h2>Feel the Vibe</h2>
        <p>.......your preffered home for any and everything footwears</p>
        <button>Shop With Us</button>
        </div>
        <img src={url} alt= "" />
        <img src={url_2} alt = '' className='url_2' />
    </div>
  )
}

export default Home