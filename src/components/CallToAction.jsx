import React, { useEffect, useState } from 'react'

const CallToAction = () => {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("src/data/callToAction.json")
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);
  if (!info) {
    return null;
  }

  return (
    <section className='pt-[10.6vh]'>
        {info.titles.map((title, i) => (
          <span key={i} className='bg-black'>
            <div className=''>
              <h1 className='font-titles font-[700] text-7xl uppercase' >{title}</h1>
            </div>
          </span>
        ))}
        <p>{info.message}</p>
    </section>
  )
}

export default CallToAction