"use client"

import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";


const Header = () => {
    const [show, setShow] = useState(false);

    const [count, setCount]  = useState(0)
    const [cal, setCal] = useState(0)

    const  handleClick = ()=> {
        setShow(!show)
       console.log("1 ===========>", show)
    }

    console.log("2 ============>", show)

    useEffect(()=> {
        console.log("3 ============>", show)
    }, [])



useEffect(()=> {
    setCal(()=> count * 2)
},[count])



  return (
  <>
                <h1 className='text-4xl'>
                {count}
            </h1>

            <h1 className='text-4xl text-red-500'>
                {cal}
            </h1>
    <header className='w-full flex items-center justify-between border-b py-3 px-4'>
        
        <div className="flex items-start justify-start">
            <h1 
            onClick={handleClick}
            className='text-4xl font-bold'>
                LOGO
            </h1>
        </div>
        <div className=" w-full flex items-center justify-center">
           
            <ul className='flex gap-8 uppercase text-sm font-medium'>
                <li
                onClick={()=> setCount((a) => a + 1)}
                className='cursor-pointer  hover:text-yellow-600'>Home</li>
                <li className='cursor-pointer  hover:text-yellow-600'>contact</li>
                <li className='cursor-pointer  hover:text-yellow-600'>blog</li>
                <li className='cursor-pointer  hover:text-yellow-600'>shop</li>
                <li className='cursor-pointer  hover:text-yellow-600'>pages</li>
                <li className='cursor-pointer  hover:text-yellow-600'>project</li>
                <li className='cursor-pointer  hover:text-yellow-600'>virtual tours</li>
            </ul>
        </div>
        <div className="flex gap-4">
            <span>
                <CiSearch  fontSize={20} className='cursor-pointer hover:text-yellow-600'/>
            </span>
            <span>
                <FiUser  fontSize={20} className='cursor-pointer hover:text-yellow-600'/>
            </span>
            <span>
                <PiHandbagSimpleBold  fontSize={20} className='cursor-pointer hover:text-yellow-600'/>
            </span>
            <span><RiMenu2Fill  fontSize={20} className='cursor-pointer hover:text-yellow-600'/>
</span>
        </div>
    </header>
  </>
  )
}

export default Header