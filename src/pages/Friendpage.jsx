// // import React from 'react';

// import { useContext } from "react";
// import { CallContext } from "../context/CallContext";

// const Friendpage = () => {
// const {storeCallList} = useContext(CallContext);
// console.log(storeCallList);

//     return (
//         <div>
//            <h2> kisui naiga</h2>
//         </div>
//     );
// };

// export default Friendpage;



import { useContext } from "react";
import { CallContext } from "../context/CallContext"; // আপনার পাথ অনুযায়ী চেক করুন
import { FiPhoneCall, FiVideo, FiMessageSquare } from "react-icons/fi";

const Friendpage = () => {
    const { storeCallList } = useContext(CallContext);

    // আইকন দেখানোর জন্য একটি ছোট ফাংশন
    const getIcon = (type) => {
        if (type === "call") return <FiPhoneCall className="text-gray-600 w-5 h-5" />;
        if (type === "video") return <FiVideo className="text-gray-600 w-5 h-5" />;
        return <FiMessageSquare className="text-gray-600 w-5 h-5" />;
    };

    return (
        <div className="container mx-auto p-8 bg-white min-h-screen shadow-lg rounded-xl mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Timeline</h1>
            <p className="text-gray-400 mb-8">Filter timeline</p>

            <div className="space-y-8 relative">
                {/* টাইমলাইনের বাম পাশের লম্বা দাগটি */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100"></div>

                {storeCallList.length === 0 ? (
                    <p className="text-center text-gray-500 py-10">No activities recorded yet.</p>
                ) : (
                    storeCallList.map((item, index) => (
                        <div key={index} className="flex items-start gap-6 relative group">
                            {/* আইকন কন্টেইনার */}
                            <div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm z-10 group-hover:bg-blue-50 transition-colors">
                                {getIcon(item.type)}
                            </div>

                            {/* টেক্সট কন্টেন্ট */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {/* এখানে অ্যাকশন টাইপ এবং নাম দেখাবে (যেমন: Video with Aisha Patel) */}
                                    <span className="capitalize">{item.type}</span> with {item.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {/* বর্তমানে ডেমো ডেট দেওয়া, আপনি চাইলে এখানে logic যোগ করতে পারেন */}
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