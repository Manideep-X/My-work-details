import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navBtnRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 50);
  }, []);

  const navScrollControl = () => {
    const navIcon = navBtnRef.current;
    if (window.scrollY > lastScrollY) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
    if (!isOpen) {
      navIcon.style = "transform: -rotate(90deg);";
      setIsOpen(false);
    }
    setLastScrollY(window.scrollY);
  }

  const menuClick = (e) => {
    if (!isOpen) {
      e.target.style = "transform: rotate(90deg);";
      setIsOpen(true);
    } else {
      e.target.style = "transform: -rotate(90deg);";
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navScrollControl);
    return () => window.removeEventListener('scroll', navScrollControl);
  }, [lastScrollY]);

  return (
    <nav className={`select-none overflow-hidden
    fixed backdrop-blur-sm w-full z-50 h-2/3
    lg:grid lg:grid-cols-[48%_42%_10%] justify-between py-[1.3vh] px-[4vw]
    transition-all duration-700 ease-in-out transform -translate-y-full
    ${navVisible ? 'translate-y-0' : ''}
    ${isOpen ? 'h-2/3 bg-[rgba(241,241,241,0.6)] shadow-lg' : 'h-[4.5rem] bg-[rgba(241,241,241,0.3)] shadow-none'}
    `}>
      <div className='flex lg:block justify-between items-center'>
        <a href="" className='md:w-60 w-48 block'><img src="./src/assets/icon3.png" alt="Work Projects" /></a>
        <img ref={navBtnRef} src="./src/assets/menu.svg" alt="Menu" onClick={e => menuClick(e)} className='lg:hidden md:w-16 w-14 self-center transition-all duration-700 ease-in-out' />
      </div>
      <ul className='lg:flex lg:p-0 pt-6 pl-6 block gap-[0.6vw] items-center'>
        <a href="#home" className=''>
          <li className='lg:w-24 sm:w-1/4 cursor-pointer lg:text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] lg:text-base lg:font-descriptions lg:font-normal leading-tight font-bold md:text-[2.85rem] text-[2.5rem] font-titles'>Home</li>
        </a>
        <a href='#about-me' className=''>
          <li className='lg:w-24 sm:w-1/4 cursor-pointer lg:text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] lg:text-base lg:font-descriptions lg:font-normal leading-tight font-bold md:text-[2.85rem] text-[2.5rem] font-titles'>About Me</li>
        </a>
        <a href="#projects" className=''>
          <li className='lg:w-24 sm:w-1/4 cursor-pointer lg:text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] lg:text-base lg:font-descriptions lg:font-normal leading-tight font-bold md:text-[2.85rem] text-[2.5rem] font-titles'>Projects</li>
        </a>
        <a href="#resume" className=''>
          <li className='lg:w-24 sm:w-1/4 cursor-pointer lg:text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] lg:text-base lg:font-descriptions lg:font-normal leading-tight font-bold md:text-[2.85rem] text-[2.5rem] font-titles'>Résumé</li>
        </a>
      </ul>
      <a href="#contacts" className='block lg:inline lg:text-center lg:m-0 ml-6 self-center lg:w-24 sm:w-1/4 cursor-pointer list-none border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all lg:text-base lg:font-descriptions lg:font-normal leading-tight font-bold md:text-[2.85rem] text-[2.5rem] font-titles'>
        Contacts
      </a>
    </nav>
  )
}

export default Navbar