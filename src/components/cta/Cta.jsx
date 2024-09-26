import React from 'react';
import './cts.css'; // External CSS for zoom effect

const Cta = () => {
  return (
   <div className="support-card-container hover:bg-black hover:text-white hover:scale-105 transition duration-500 ease-in-out p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white max-w-full mx-20 mb-4">
  <h2 className="text-2xl font-semibold mb-2">Support Our Team</h2>
  <p className="text-gray-600 dark:text-gray-300 mb-4">
    Join us in our journey to build an electric vehicle for the SAE BAJA competition. Your support can make a difference!
  </p>
  <button className="donate-btn bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
    Donate Now
  </button>
</div>

  );
};

export default Cta;
