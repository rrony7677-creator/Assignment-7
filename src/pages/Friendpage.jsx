
import { useContext, useState } from "react";
import { CallContext } from "../context/CallContext"; 
import { FiPhoneCall, FiVideo, FiMessageSquare } from "react-icons/fi";

const Friendpage = () => {
    const { storeCallList } = useContext(CallContext);
const [activeFilter,setActiveFilter] = useState('all')
const filteredList =storeCallList.filter(item=>{if(activeFilter === 'all')
    return true;
    return item.type.toLowerCase()===activeFilter.toLowerCase();
})

   
    const getIcon = (type) => {
        if (type === "call") return <FiPhoneCall className="text-gray-600 w-5 h-5" />;
        if (type === "video") return <FiVideo className="text-gray-600 w-5 h-5" />;
        return <FiMessageSquare className="text-gray-600 w-5 h-5" />;
    };

    return (
        <div className="container mx-auto p-8 bg-white min-h-screen shadow-lg rounded-xl mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Timeline</h1>
            <p className="text-gray-400 mb-8">Filter timeline</p>
<select 
    className="select select-bordered w-full max-w-xs mt-2" 
    onChange={(e) => setActiveFilter(e.target.value)}
>
    <option value="all">All Activities</option>
    <option value="call">Calls</option>
    <option value="video">Videos</option>
    <option value="text">Texts</option>
</select>
<div className="space-y-8 relative">
               
<div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100"></div>

{storeCallList.length === 0 ? (
    <p className="text-center font-bold container mx-auto items-center justify-center text-4xl text-gray-500 py-35">No activities recorded yet.</p>
) : (
filteredList.map((item, index) => (
<div key={index} className="flex items-start gap-6 relative group">

<div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm z-10 group-hover:bg-blue-50 transition-colors">
    {getIcon(item.type)}
</div>

<div className="flex flex-col">
<h3 className="text-lg font-semibold text-gray-700">
  
    <span className="capitalize">{item.type}</span> with {item.name}
</h3>
<p className="text-sm text-gray-400">
    
    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Friendpage;