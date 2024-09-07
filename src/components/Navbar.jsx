import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 50);
  }, []);

  const navScrollControl = () => {
    if (window.scrollY > lastScrollY) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', navScrollControl);
    return () => window.removeEventListener('scroll', navScrollControl);
  }, [lastScrollY]);

  return (
    <nav className={`
    fixed backdrop-blur-sm bg-[rgba(241,241,241,0.3)] w-full z-50
    grid grid-cols-[48%_42%_10%] justify-between py-[1.3vh] px-[4vw]
    transition-all duration-700 ease-in-out transform -translate-y-full
    ${ navVisible ? 'translate-y-0' : '' }
    `}>
        <a href="" className='w-60 block'><img src="./src/assets/icon3.png" alt="Work Projects" className='' /></a>
        <ul className='flex gap-[0.6vw] items-center'>
            <a href="#home">
              <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>Home</li>
            </a>
            <a href='#about-me'>
              <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>About Me</li>
            </a>
            <a href="#projects">
              <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>Projects</li>
            </a>
            <a href="#resume">
              <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>Résumé</li>
            </a>
        </ul>
        <a href="#contacts" className='w-24 cursor-pointer self-center list-none text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>
          Contacts
        </a>
    </nav>
  )
}

export default Navbar