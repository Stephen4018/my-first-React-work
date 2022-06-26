import React from 'react'
import DATA from '../../data/data'

const Products = () => {
  return (
    <div>
          {
            DATA.map((item) => {
              return (
                <div key={item.id} className="">
                  <img src={item.img_url} alt='' />
                  <p>{item.caption}</p>
                </div>
              )
            })
          }
        </div>
  )
}

export default Products
