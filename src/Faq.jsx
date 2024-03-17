import React, { useState } from 'react'
import Faqdata from './Data/Faqdata'
import './Faq.css'

function Faq() {
  let [showanswer, setShowanswer] = useState()
  return (
    <>
      <div className='m-auto w-[90vw] py-4' >
        {
          Faqdata.map((val) => {
            return (
              <div className='border-2 border-gray-100  mb-4' key={val.id}>
                <h2 className='text-2xl bg-black text-white px-3' onClick={()=>{
                  setShowanswer(val.id)
                }}>{val.question}</h2>
                <div className='bg-slate-400 text-black-500 '>
                  <p id={showanswer == val.id ? 'show' : ''} className='h-0 scale-y-0 w-3/4 text-xl'>{val.answer}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Faq