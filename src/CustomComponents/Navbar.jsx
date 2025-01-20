import React from 'react'

const Navbar = () => {
  return (
    <>

      <div className="flex border border-black items-center  gap-[30%] bg-gray-800 text-white w-[100%]">
        <h1 className="flex justify-center ml-3 ">Logo</h1>
        <ul className="flex p-5 gap-3 justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Severcise</li>
          <li>Contact</li>
          <li>Cart</li>



        </ul>
      </div>

      

    </>




  )
}

export default Navbar