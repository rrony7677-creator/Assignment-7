// import React from 'react';
import { useState } from 'react';
import { FaFileAlt, FaUserClock } from 'react-icons/fa';
import { FcVideoCall } from 'react-icons/fc';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';



const CallList = () => {
const {id} = useParams()
// console.log( id);

const calls = useLoaderData()
// console.log(calls);

const expectedCall = calls.find((call) => call.id === parseInt(id));
console.log(expectedCall);


const [storeCallList,setStoreCallList] = useState([]);

const handleCall = (id)=>{

const isExist =  storeCallList.find((call)=>call.id===id);
if(isExist){
alert("The call is already added");}
else{setStoreCallList([...storeCallList,id])}

console.log(id,storeCallList);
}


    return (
       <div className="container mx-auto p-6 bg-white shadow-lg rounded-xl">
  
  {/* Top Section: Profile and Main Stats */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-dashed border-amber-300 pb-8">
    
    {/* Profile Info (1 column) */}
    <div className="flex flex-col items-center text-center bg-base-100 shadow-sm p-4">
      <img className="w-24 h-24 rounded-full border-2 border-gray-200" src={expectedCall.picture} alt="Persons Picture" />
      <h2 className="mt-3 font-bold text-xl">{expectedCall.name}</h2>

<div className="flex flex-col gap-2 w-full items-center">
      
      <div className="px-4 py-1 rounded-full text-xs font-bold tracking-wider bg-green-100 text-green-700 uppercase">{expectedCall.status}
      </div>
<div className="flex gap-3 items-center">
{
  expectedCall.tags.map((tag,ind)=><div key={ind} className=" flex gap-3 px-4 py-1 rounded-full text-xs font-bold tracking-wider bg-red-500 text-white">{tag}</div> )
}
</div>
    </div>

      <p className="italic text-gray-500 text-sm mt-2">{expectedCall.bio}</p>
    </div>


    {/* Stats (3 columns on medium screens) */}
    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
      <div className=" bg-base-100 shadow-sm p-4 w-80 h-30 space-y-4">
        <p className="text-2xl font-bold">{expectedCall.days_since_contact}</p>
        <p className="text-gray-500 text-xs">Days Since Contact</p>
      </div>
      <div className=" bg-base-100 shadow-sm p-4 w-80 h-30 space-y-4">
        <p className="text-2xl font-bold">{expectedCall.goal}</p>
        <p className="text-gray-500 text-xs">Goal (Days)</p>
      </div>
      <div className=" bg-base-100 shadow-sm p-4 w-80 h-30 space-y-4">
        <p className="text-lg font-bold text-gray-700">{expectedCall.next_due_date}</p>
        <p className="text-gray-500 text-xs">Next Due</p>
      </div>
    </div>

{/* <h2>ki liksi</h2> */}

  </div>

  {/* Bottom Section: Action Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
    
    {/* Left Side Actions */}
    <div className="space-y-4 border-r pr-4 ">
       <button className="flex items-center text-center justify-center bg-base-100 shadow-sm w-90 gap-2 text-gray-600  font-bold ">
          <span><FaUserClock /></span> Snooze 2 Weeks
       </button>
       <button className="flex items-center text-center justify-center bg-base-100 shadow-sm w-90 gap-2 text-gray-600 font-bold">
          <span><FaFileAlt /></span> Archive
       </button>
       <button className="flex items-center text-center justify-center bg-base-100 shadow-sm w-90 gap-2 text-red-500 font-bold">
          <span><RiDeleteBin6Fill /></span> Delete
       </button>
    </div>

    {/* Right Side Interaction Icons */}

<div className="">
<h2 className="font-bold mb-3">Quick Check-in</h2>
    <div className=" justify-center items-center gap-10 grid grid-cols-1 md:grid-cols-3">
      <div className="text-center cursor-pointer group  bg-gray-50 h-[50%] w-50">
        <button className=" btn btn-dash p-4 rounded-full " onClick={()=>handleCall(id)} ><span><FiPhoneCall /></span><span className="text-sm mt-1 font-bold">Call</span></button>
        {/* <p className="text-sm mt-1 font-bold">Call</p> */}
      </div>

      <div className="text-center cursor-pointer group  bg-gray-50 h-[50%] w-50">
        <button className="btn btn-dash p-4 rounded-full "><span><MdOutlineTextsms /></span> <span className="text-sm mt-1 font-bold">Text</span></button>
      
      </div>
      <div className="text-center cursor-pointer group  bg-gray-50 h-[50%] w-50  ">
   <button className="btn btn-dash  p-4 rounded-full "><span><FcVideoCall /></span> <span className="text-sm mt-1 font-bold ">Vedio</span></button>
        
      </div>
    </div>
</div>



  </div>
</div>

    );
};

export default CallList;