import React from 'react';
import payImg from '../../assets/payScan.jpeg';
import closeImg from '../../assets/closeSymbol.png'; // Assuming this is the close (cross) image

const DonationForm = ({ handleCloseForm }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Close Button */}
      <img
        src={closeImg}
        alt="Close"
        className="absolute top-4 right-4 w-14 h-14 cursor-pointer object-cover hover:scale-105"
        onClick={handleCloseForm}
      />

      <h2 className="font-serif text-3xl mb-4">Support Our Team</h2>
      <p className="text-xl text-gray-600 mb-6">
        Join us in our journey to build an electric vehicle for the SAE BAJA competition. Your support can make a difference!
      </p>

      {/* Scanner Image */}
      <img
        src={payImg}  // Replace with the actual scanner image URL
        alt="QR Code Scanner"
        className="w-40 h-40 mb-6"
      />

      {/* Form */}
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        <input
          type="number"
          placeholder="Donation Amount"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full mt-4"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
