// import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
<div className="container mx-auto mt-20 bg-base-100 border-b border-dashed pb-8.75 border-gray-400">
<div className="hero  min-h-[30vh]">
<div className="hero-content text-center">
    <div >
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
       Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most..
      </p>
      <button className="btn bg-gray-600 text-white"> <FaPlus />
 Add a Friend</button>
    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 text-center items-center">
<div className="card bg-base-100 w-96 shadow-sm ">
  <div className="card-body ">
    <h2 className="font-semibold text-[32px]">6</h2>
    <p>Need Attention</p>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm text-center">
  <div className="card-body ">
    <h2 className="font-semibold text-[32px]">3</h2>
    <p>On track</p>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm text-center">
  <div className="card-body ">
    <h2 className="font-semibold text-[32px]">12</h2>
    <p>Interactions This Month</p>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm text-center">
  <div className="card-body ">
    <h2 className="font-semibold text-[32px]">12</h2>
    <p>Total Freinds</p>
  </div>
</div>
</div>
</div>
    );
};

export default Banner;