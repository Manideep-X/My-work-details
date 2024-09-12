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
    fixed backdrop-blur-sm w-full z-50 h-[4.5rem]
    lg:grid md:flex-row lg:grid-cols-[48%_42%_10%] justify-between py-[1.3vh] px-[4vw]
    transition-all duration-700 ease-in-out transform -translate-y-full
    ${navVisible ? 'translate-y-0' : ''}
    ${isOpen ? 'h-2/3 bg-[rgba(241,241,241,0.6)]' : 'h-[4.5rem] bg-[rgba(241,241,241,0.3)]'}
    `}>
      <div className='flex lg:block justify-between items-center'>
        <a href="" className='w-60 block'><img src="./src/assets/icon3.png" alt="Work Projects" /></a>
        <img ref={navBtnRef} src="./src/assets/menu.svg" alt="Menu" onClick={e => menuClick(e)} className='lg:hidden w-16 self-center transition-all duration-700 ease-in-out' />
      </div>
      <ul className='lg:flex md:block sm:block gap-[0.6vw] items-center'>
        <a href="#home" className='md:w-1/3 sm:w-1/3 md:block sm:block lg:inline'>
          <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] lg:text-base md:text-lg'>Home</li>
        </a>
        <a href='#about-me' className='md:w-1/3 sm:w-1/3 md:block sm:block lg:inline'>
          <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>About Me</li>
        </a>
        <a href="#projects" className='md:w-1/3 sm:w-1/3 md:block sm:block lg:inline'>
          <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>Projects</li>
        </a>
        <a href="#resume" className='md:w-1/3 sm:w-1/3 md:block sm:block lg:inline'>
          <li className='w-24 cursor-pointer text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all duration-200 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)]'>Résumé</li>
        </a>
      </ul>
      <a href="#contacts" className='block lg:inline w-24 cursor-pointer self-center list-none text-center border-b-[1.6px] border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,0.8)] hover:tracking-widest active:font-semibold transition-all'>
        Contacts
      </a>
    </nav>
  )
}

export default Navbar