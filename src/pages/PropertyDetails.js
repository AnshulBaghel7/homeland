import React from 'react';

// import data
// import {  housesData } from '../data';

// import use params
// import { useParams } from 'react-router-dom';

// import icons
// import {BiBed, BiBath, BiArea } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';
import House1 from '../assests/img/houses/house1.png';
import House1Lg from '../assests/img/houses/house1lg.png';
import Agent1 from '../assests/img/agents/agent1.png';




const PropertyDetails = () => {
  // get the house id
  // const {id} = useParams();
  // console.log(id);
  //get the house based on the id
  // const house = housesData.find(house =>  {
  //   return house.id === parseInt(id);
  // });

  const  house = {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '83, Virar',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  }

  return (
  <section  className="w-full bg-white">
    <div className="w-[93%] mx-auto min-h-[800px]">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>{house.price}</div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt=''/>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path>
            </svg>
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path>
            </svg>
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"></path>
              <path d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></path>
            </svg>
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt=''/>
            </div>
            <div>
            <div className='font-bold text-lg'>{house.agent.name}</div>
            <Link to='' className='text-violet-700 text-sm'>View Listings </Link>
            </div>
          </div>
          {/*form*/}
          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text'
            placeholder='Email'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text'
            placeholder='Name'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text'
            placeholder='Phone'/>
            <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
            placeholder='Message*'
            defaultValue='Hello I am interested in [Modern apartment]'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
              <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'> Call </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PropertyDetails;
