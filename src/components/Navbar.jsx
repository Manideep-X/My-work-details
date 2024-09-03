import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed backdrop-blur-sm bg-[rgba(241,241,241,0.3)] w-full grid grid-cols-[48%_42%_10%] justify-between py-[1.6vh] px-[5vw]'>
        <a href=""><img src="./src/assets/icon3.png" alt="Work Projects" className='w-60' /></a>
        <ul className='flex gap-[0.6vw] items-center'>
            <li className='w-24 text-center border-b-2 border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,1)] hover:tracking-widest active:font-semibold transition-all'>Home</li>
            <li className='w-24 text-center border-b-2 border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,1)] hover:tracking-widest active:font-semibold transition-all'>About Me</li>
            <li className='w-24 text-center border-b-2 border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,1)] hover:tracking-widest active:font-semibold transition-all'>Projects</li>
            <li className='w-24 text-center border-b-2 border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,1)] hover:tracking-widest active:font-semibold transition-all'>Résumé</li>
        </ul>
        <li className='w-24 self-center list-none text-center border-b-2 border-[rgba(43,43,43,0)] hover:border-[rgba(43,43,43,1)] hover:tracking-widest active:font-semibold transition-all'>Contacts</li>
    </nav>
  )
}

export default Navbar