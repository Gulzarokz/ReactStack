import React from 'react'

const Products = (props) => {
  console.log(props)
  const {image, price, title, rating} = props.product;
    
  return (
    <div className='border border-black w-[200px] py-3 px-3 mx-4 my-4 text-center'>
       <img src={image} alt="" />
       <p className="">{title}</p>
       <p className="">price{price}</p>
       <p className="">rating{rating.rate}</p>
    </div>
  )
}

export default Products