import React from 'react';
import imag from '../assets/img9.jpg';

const VehicleSpecs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6">
        {/* Vehicle Image */}
        <div className="flex justify-center mb-8">
          <img
            src={imag}
            alt="Electric Vehicle"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Vehicle Specifications</h1>
        
        {/* Vehicle Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vehicle Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p><span className="font-bold">Vehicle Type:</span> Electric</p>
              <p><span className="font-bold">Curb Weight:</span> 250 kg</p>
              <p><span className="font-bold">Max. Speed:</span> 65 km/h</p>
              <p><span className="font-bold">Acceleration:</span> 5.77 m/s²</p>
              <p><span className="font-bold">Gradiability:</span> 77.78%</p>
              <p><span className="font-bold">Stopping Distance:</span> 6 m</p>
              <p><span className="font-bold">Ground Clearance:</span> 330 mm</p>
            </div>
            <div>
              <p><span className="font-bold">Roll Cage:</span> AISI 4130 Chrome Moly Steel</p>
              <p><span className="font-bold">Wheel Base:</span> 1430 mm</p>
              <p><span className="font-bold">Suspension Type:</span> Damper & Coil</p>
              <p><span className="font-bold">Transmission Type:</span> CVT & Single Stage Reduction Transmission</p>
              <p><span className="font-bold">Brake Type:</span> Hydraulic Disc Brakes</p>
              <p><span className="font-bold">Drive Train:</span> Rear Wheel Drive</p>
              <p><span className="font-bold">Steering Type:</span> Ackerman</p>
            </div>
          </div>
        </div>
        
        {/* Motor Control Unit */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Motor Control Unit</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p><span className="font-bold">Motor Type:</span> PMSM (Permanent Magnet Synchronous Motor)</p>
              <p><span className="font-bold">Motor Capacity:</span> 5 kW</p>
            </div>
            <div>
              <p><span className="font-bold">Torque:</span> 25 Nm</p>
              <p><span className="font-bold">Peak Power:</span> 6.5 kW</p>
              <p><span className="font-bold">Max Torque:</span> 57.90 Nm</p>
            </div>
          </div>
        </div>
        
        {/* Battery Parameters */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Battery Parameters</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p><span className="font-bold">Battery Configuration:</span> 13S & 24P</p>
              <p><span className="font-bold">Battery Capacity:</span> 48 V 120Ah</p>
            </div>
            <div>
              <p><span className="font-bold">Battery Chemistry:</span> Li-NMC (Lithium-Nickel-Manganese-Cobalt Oxide)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecs;
