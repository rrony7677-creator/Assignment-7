
import React, { use } from 'react';
import { Link } from 'react-router';

const friendPromise = fetch('/friendData.json')
.then((res)=>res.json())

const AllFriend = () => {
const Friends = use(friendPromise)
console.log(Friends);
return (
<div className="container mx-auto mt-22.5">
    <h2 className="text-3xl font-bold mt-10 mb-4">Your Friends {Friends.length}</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
{
Friends.map((friend,ind)=> 

<Link to={`/callList/${friend.id}`} key={ind} className=" items-center justify-center min-h-5">
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center w-80 text-center">
    
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-gray-50">
      <img 
        src={friend.picture}
        alt="person name" 
        // className="w-full h-full object-cover"
      />
    </div>

    <h2 className="text-xl font-bold text-gray-800 mb-1">{friend.name}</h2>

    <p className="text-sm text-gray-400 mb-4 font-medium">{friend.days_since_contact}d ago</p>

<div className="flex flex-col gap-2 w-full items-center">
      
      <div className="px-4 py-1 rounded-full text-xs font-bold tracking-wider bg-green-100 text-green-700 uppercase">{friend.status}
      </div>
<div className="flex gap-3 items-center">
{
  friend.tags.map((tag,ind)=><div key={ind} className=" flex gap-3 px-4 py-1 rounded-full text-xs font-bold tracking-wider bg-red-500 text-white">{tag}</div> )
}
</div>
    </div>
  </div>
</Link>)
}


</div>



</div>
    );
};

export default AllFriend;