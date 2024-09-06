import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 50);
  }, []);

  return (
    <nav className={`
    fixed backdrop-blur-sm bg-[rgba(241,241,241,0.3)] w-full
    grid grid-cols-[48%_42%_10%] justify-between py-[1.5vh] px-[4vw]
    transition-all duration-700 ease-in-out transform -translate-y-full
    ${ navVisible ? 'translate-y-0' : '' }
    `}>
        <a href="" className='w-60 block'><img src="./src/assets/icon3.png" alt="Work Projects" className='' /></a>
        <ul className='flex gap-[0.6vw] items-center'>
            <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>Home</li>
            <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>Projects</li>
            <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>About Me</li>
            <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>Résumé</li>
        </ul>
        <li className='w-24 cursor-pointer self-center list-none text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>Contacts</li>
    </nav>
  )
}

export default Navbar