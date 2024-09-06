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
            }, i * 500);
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
    <section className='pt-[20.6vh] px-[4vw] h-screen'>
        {info.titles.map((title, i) => (
          <div key={i} className={`
            text-nowrap overflow-hidden
            transition-all duration-[1000ms] ease-slo-to-fast transform
            ${ visibleIndices.includes(i) ? 'w-full' : 'w-2' }
          `}>
            <div className={`
                font-titles font-[700] text-[6.5rem] uppercase leading-[0.85]
                transition-all duration-1000 ease-in-out transform
                ${ visibleIndices.includes(i) ? 'opacity-100' : 'opacity-0' }
                `} >{title}
            </div>
          </div>
        ))}
        <div className='px-[1vw] py-[12vh]'>
          {info.messages.map((msg, j) => (
            <p className={`
              inline
              transition-all duration-500 ease-in-out transform
              ${ visibleMsg.includes(j) ? 'opacity-100' : 'opacity-0' }
              `}>{msg}
            </p>
          ))}
        </div>
    </section>
  )
}

export default CallToAction