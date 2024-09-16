import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navBtnRef = useRef(null);
  const navHeightRef = useRef(null);

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
      e.target.style = "transform: rotate(90deg); opacity: 1;";
      setIsOpen(true);
    } else {
      e.target.style = "transform: -rotate(90deg); opacity: 0.8;";
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navScrollControl);
    return () => window.removeEventListener('scroll', navScrollControl);
  }, [lastScrollY]);

  useEffect(() => {
    const content = navHeightRef.current;
    if (content) {
      if (isOpen) {
        content.style.height = `${content.scrollHeight}px`;
      } else {
        content.style.height = `4.5rem`;
      }
    }
  }, [isOpen]);

  return (
    <nav ref={navHeightRef} className={`select-none overflow-hidden
    fixed backdrop-blur-sm w-full z-50
    lg:grid lg:grid-cols-[48%_42%_10%] justify-between pt-[1.3vh] px-[4vw]
    transition-all duration-700 ease-in-out transform -translate-y-full
    ${navVisible ? 'translate-y-0' : ''}
    ${isOpen ? 'h-auto bg-[rgba(216,216,216,0.6)] shadow-lg' : 'h-[4.5rem] bg-[rgba(241,241,241,0.3)] shadow-none'}
    `}>
      <div className='flex lg:block justify-between items-center z-[70]'>
        <a href="" className='md:w-60 s:w-48 w-44 block'><img src="./src/assets/icon3.png" alt="Work Projects" /></a>
        <img ref={navBtnRef} src="./src/assets/menu.svg" alt="Menu" onClick={e => menuClick(e)} className='lg:hidden md:w-10 w-8 pr-1 self-center transition-all duration-700 ease-in-out opacity-80' />
      </div>
      <ul className='flex lg:flex-row flex-col lg:p-0 pt-6 pl-6 gap-[0.6vw] lg:items-center'>
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
      <div className="lg:hidden flex border-t-[1px] border-[#2b2b2b] py-2 mt-[10%] justify-between">
        <p className='sm:text-[0.9rem] text-[0.8rem]'>Site last updated on: Sep 2024</p>
        <p className='sm:text-[0.9rem] text-[0.8rem] tracking-tighter'>&copy; WORK DETAILS</p>
      </div>
    </nav>
  )
}

export default Navbar