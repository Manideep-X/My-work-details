import React, { useEffect, useState } from 'react'

const CallToAction = () => {

  const [info, setInfo] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [visibleMsg, setVisibleMsg] = useState([]);

  useEffect(() => {
    fetch("src/data/callToAction.json")
      .then(response => response.json())
      .then(
        data => {
          setInfo(data);

          setTimeout(() => {
            data.titles.forEach((_, i) => {
              setTimeout(() => {
                setVisibleIndices(prev => [...prev, i]);
              }, i * 200);
            });
          }, 500)

          setTimeout(() => {
            data.messages.forEach((_, i) => {
              setTimeout(() => {
                setVisibleMsg(prev => [...prev, i]);
              }, i * 400);
            });
          }, 1300)

        })
      .catch(err => {
        console.error('There was a problem with the fetch operation : ', err);
      });
  }, []);

  if (!info) {
    return null;
  }

  return (
    <section id='home' className={`
      pt-[24vh]
      transition-all duration-500 ease-in-out
      ${visibleMsg.includes(2) ? 'h-[93vh]' : 'h-screen'}
    `}>
      {info.titles.map((title, i) => (
        <div key={i} className={`
            text-nowrap overflow-hidden px-[4vw]
            transition-all duration-1000 ease-slo-to-fast transform
            ${visibleIndices.includes(i) ? 'w-full' : 'w-2'}
          `}>
          <div className={`
                  font-titles font-[700] text-[6.5rem] uppercase leading-[0.85]
                  transition-all duration-[1500ms] ease-in-out transform
                  ${visibleIndices.includes(i) ? 'opacity-100' : 'opacity-0'}
                `} >{title}
          </div>
        </div>
      ))}
      <div className='flex py-[5vh] px-[5vw] mt-[14vh] justify-between border-t-[1.5px] border-[#b2b2b2]'>
        <div className='content-center'>
          {info.messages.map((msg, j) => (
            <p key={j} className={`
                inline text-[1rem]
                transition-all duration-500 ease-in-out transform
                ${visibleMsg.includes(j) ? 'opacity-100' : 'opacity-0'}
              `}>{msg}
            </p>
          ))}
        </div>
        <div className={`
            transition-all duration-300 ease-in-out transform
            ${visibleMsg.includes(2) ? 'opacity-100' : 'opacity-0'}
          `}>
          <a href='#about-me' className={`text-center block
            uppercase px-3 py-1 border-2 rounded-full border-[rgba(43,43,43,0.8)]
            hover:bg-[rgb(43,43,43)] hover:text-[#f1f1f1] cursor-pointer
            transition-all duration-200
          `}>
            {info.intro}</a>
        </div>
      </div>
      <a href="https://github.com/Manideep-X?tab=repositories" target='_blank' className={`
          transition-all duration-500 ease-in-out transform
          ${visibleMsg.includes(2) ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className={`
          fixed flex items-center justify-between bg-red-500 
          shadow-[-5px_10px_18px_-4px_rgba(0,0,0,0.45)]
          w-52 px-4 py-3 pb-28 top-[28%] -right-32 -rotate-90 hover:-right-28
          transition-all duration-200 ease-in-out
        `}>
          <p className='text-white'>See all projects in</p>
          <img src="src/assets/github-mark-white.svg" alt="GitHub" className='w-8 rotate-90 pl-[0.8px]' />
        </div>
      </a>
    </section>
  )
}

export default CallToAction