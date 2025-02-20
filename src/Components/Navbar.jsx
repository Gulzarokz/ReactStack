import React,{useEffect, useState} from 'react'

const Navbar = () => {

    const [btnName, setBtnName] = useState("Light");

   


  return (
    <div className='border border-b-black flex justify-between py-2 px-4 bg-green-700 text-white'>
        <h1>Logo</h1>
        <ul className="flex gap-4">
            <li className="p-3">Men</li>
            <li className="p-3">Women</li>
            <li className="p-3">Kids</li>
            <li className="p-3">Cart</li>
            <button onClick={()=>{
              btnName === "Light" ? setBtnName("Dark"): setBtnName("Light");
            }}>{btnName}</button>
        </ul>
       
    </div>
  )
}

export default Navbar