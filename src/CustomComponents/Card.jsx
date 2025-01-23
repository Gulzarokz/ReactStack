import React from 'react'
// import image1 from '../assets/Pictures/image1.jpg';
const Card = ({ product }) => {
  // console.log(props);
  const { image, title, price, rating } = product;


  return (
    <>
      
      <div className="flex gap-1 p-2 justify-center items-center">
        <div className="border border-black m-1 justify-center items-center p-2 text-center">
          <img className="w-[50%] text-center h-[170px] object-cover mb-4" src={image} alt="Product" />
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-lg font-semibold">${price}</p>
          <p className="text-lg font-semibold">{rating.rate}</p>
        </div>
      </div>
   

    </>


  )
}

export default Card