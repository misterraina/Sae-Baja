import React from 'react'

export default function Footer() {
  return (
    <div className='p-20 pt-10 dark:bg-dark-600'>

    <div className='flex flex-col justify-between items-center mb-12'>
      <h1 className='font-bold text-3xl font-serif dark:text-dark-200'>SMVDU</h1>
        <ul className='flex space-x-8 pt-6 text-gray-700 text-lg dark:text-dark-200'>
            <li>About us</li>
            <li>Contact us</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li> <a target='blank' href="https://www.bajasaeindia.org/">Competition Info</a></li>
        </ul>
        </div>

        <hr className='border-1 border-black dark:border-dark-200'/>

    <div className="flex justify-between pt-8 text-gray-700">
        <p className='dark:text-dark-200'>copyright 2024</p>
        <div>
            <ul className='flex space-x-6 dark:text-dark-200'>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Cookies Policies</li>
            </ul>
        </div>
    </div>

    </div>
  )
}
