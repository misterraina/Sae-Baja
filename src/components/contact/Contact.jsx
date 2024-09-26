import React from 'react'
import pic from '../../assets/loca.jpg'
import pic1 from '../../assets/loca1.jpg'

export default function Contact() {
  return (
    <div className='p-20 '>
      <h1 className='text-3xl font-serif font-extrabold'>Location</h1>
      <p className="text-gray-600 text-lg pt-4 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt. Facere, adipisci officia?</p>

    <div className='flex'>
    <div className='w-1/2 pt-4 pr-4'>
        <img src={pic} alt="" className='w-full rounded-xl h-3/5 object-cover'/>
        <h1 className='text-center text-2xl font-serif font-semibold pt-4'>Smvdu</h1>
        <p className='text-gray-600 pt-4 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</p>

        <button className="block mx-auto px-4 py-2 bg-white hover:bg-orange-700  rounded-full text-orange-700 font-bold hover:text-white">
          Get directions
        </button>
    </div>
    <div className='w-1/2 pt-4 pl-4'>
        <img src={pic1} alt="" className='w-full rounded-xl h-3/5 object-cover'/>
        <h1 className='text-center text-2xl font-serif font-semibold pt-4'>UtterPradesh</h1>
        <p className='text-gray-600 pt-4 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</p>

        <button className="block mx-auto px-4 py-2 bg-white hover:bg-orange-700  rounded-full text-orange-700 font-bold hover:text-white">
          Get directions
        </button>
    </div>
    </div>

    </div>
  )
}
