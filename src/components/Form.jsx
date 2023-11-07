import React, { useState } from 'react';
import {
    LockClosedIcon,
    EnvelopeIcon,
  } from "@heroicons/react/24/solid";
// import './App.css'; // Import Tailwind CSS styles

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation logic here
    console.log('Form submitted:', formData);
  };

  return (
    // <div className="flex justify-center items-center h-[600px] shadow-[0_100px_60px_-30px_rgba(0,0,0,0.5)]  ">
  
    <div className="flex justify-center items-center h-screen ">
  <form
  className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg px-40 pt-20 pb-20 mb-4"
  onSubmit={handleSubmit}
  style={{
    background: 'linear-gradient(45deg, #283048, #859398)',
    color: 'white', 
  }}
>
        {/* <img
            src={LoginVec}
            alt="Login Vector"
            className=" fill-white w-40 h-40"
          /> */}
    
  <form className="bg-white shadow-md rounded-lg px-8 pt-14 pb-8 mb-4  w-full sm:w-96" onSubmit={handleSubmit}>
    <div className='text-[#808080] font-semibold text-3xl flex items-center justify-center mb-6'>
    Sign-in
    </div>
  <div className="mb-4 relative">
  <div className="absolute left-3 top-[11px]">
    <EnvelopeIcon className="h-5 w-5 text-[#808080]" />
  </div>
  <input
    className="pl-10 focus:outline-none w-full border rounded-md p-2 bg-[#E8F0FE] shadow-xl hover:shadow-inner focus:shadow-inner"
    id="name"
    type="text"
    placeholder="Enter your name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
  />
</div>

<div className="mb-4 relative">
  <div className="absolute left-3 top-[11px]">
    <LockClosedIcon className="h-5 w-5 text-[#808080]" />
  </div>
  <input
    className="pl-10 focus:outline-none w-full border rounded-md p-2 bg-[#E8F0FE] shadow-xl hover:shadow-inner focus:shadow-inner"
    id="email"
    type="email"
    placeholder="Enter your email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>

<div className="mb-4 relative">
  <div className="absolute left-3 top-[11px]">
    <EnvelopeIcon className="h-5 w-5 text-[#808080]" />
  </div>
  <input
    className="pl-10 focus:outline-none w-full border rounded-md p-2 bg-[#E8F0FE] shadow-xl hover:shadow-inner focus:shadow-inner"
    id="password"
    type="text"
    placeholder="Enter your password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
  />
</div>

<div className="mb-4 ml-2">
  <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
  <div className="flex items-center">
    <div className="flex items-center mr-6">
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        onChange={handleChange}
        checked={formData.gender === 'male'}
        className="appearance-none h-3 w-3 border border-gray-700 rounded-full checked:bg-[#333333] checked:border-transparent focus:outline-none"
      />
      <label htmlFor="male" className="ml-2 text-gray-700">Male</label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={formData.gender === 'female'}
        className="appearance-none h-3 w-3 border border-gray-700 rounded-full checked:bg-[#333333] checked:border-transparent focus:outline-none"
      />
      <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
    </div>
  </div>
  <div className="flex items-center mb-2 mt-4">
    <label htmlFor="genderSelect" className="text-gray-700 mr-2">Select Gender:</label>
    <select
      id="genderSelect"
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="border rounded-md p-2 bg-[#333333] focus:outline-none  shadow-xl hover:shadow-inner hover:bg-slate-300 focus:shadow-inner hover:text-black"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
</div>

    <div className="mb-4 ml-2">
      <input
        type="checkbox"
        id="agree"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
        className="mr-2"
      />
      <label htmlFor="agree" className="text-gray-700 text-sm font-bold">
        I agree to the terms and conditions
      </label>
    </div>
    <div className="flex items-center justify-center mt-8"> 
        <button
          className="bg-[#676767] hover:bg-[#333333] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
  </form>
</form>
</div>
  );
};

export default App;