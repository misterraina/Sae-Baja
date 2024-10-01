import React, { useState } from 'react';
import './cts.css'; 
import payimg from '../../assets/payScan.jpeg'; 
import DonationForm from './DonationForm'; 

const Cta = () => {
  const [showForm, setShowForm] = useState(false);

  const handleDonateClick = () => {
    setShowForm(true); // Set state to true to show the form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form by setting the state to false
  };

  return (
    <div className="">

    <div className='zero dark:bg-dark-600 hover:scale-105 transition duration-300 ease-in-out'>
      <div className='one h-50 px-50 bg-orange-200 mx-20 rounded-lg'>
        <div className="two hover:bg-black hover:text-white py-24 px-16 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white max-w-full">
          <div className="three flex items-center justify-between">
            <div className="mx-2">
              <h2 className="font-semibold font-serif text-3xl mb-2">Support Our Team</h2>
              <p className="text-gray-600 text-xl py-4 dark:text-gray-300 mb-4">
                Join us in our journey to build an electric vehicle for the SAE BAJA competition. Your support can make a difference!
              </p>
            </div>
            <div className="">
              <button
                className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full whitespace-nowrap min-w-[150px]"
                onClick={handleDonateClick}
                >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
                </div>

      {/* Conditionally show the donation form and scanner */}
      {showForm && (
        <div className="mt-10 py-6 px-10 bg-gray-100 rounded-lg shadow-lg relative">
          {/* Render the donation form component */}
          <DonationForm handleCloseForm={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Cta;
