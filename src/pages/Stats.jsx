// // import React from 'react';

// // const Stats = () => {
// //     return (
// //         <div>
// //             Stats Dekso
// //         </div>
// //     );
// // };

// // export default Stats;

// import React, { useContext } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// import { CallContext } from '../context/CallContext'; // আপনার পাথ অনুযায়ী চেক করুন

// const FriendshipAnalytics = () => {
//     // Context থেকে storeCallList ডাটা নিয়ে আসুন
//     const { storeCallList } = useContext(CallContext);

//     // ১. ডাটা প্রসেসিং (লিস্ট থেকে count বের করা)
//     const getChartData = () => {
//     // এখানে সব ছোট হাতের অক্ষরে ডিফাইন করা
//     const counts = { call: 0, text: 0, video: 0 };
    
//     storeCallList.forEach(item => {
//         // ১. টাইপটিকে ছোট হাতের করে নেওয়া (Case sensitivity এড়াতে)
//         // ২. যদি "Message" পাঠান তবে সেটাকে "text" হিসেবে গণ্য করার লজিক
//         let type = item.type?.toLowerCase();
//         if (type === 'message') type = 'text'; 

//         // ৩. চেক করা: টাইপটি কি counts অবজেক্টে আছে?
//         if (type && counts.hasOwnProperty(type)) {
//             counts[type]++;
//         }
//     });

//     const total = storeCallList.length || 1;

//     return [
//         { name: 'Text', value: counts.text, percentage: ((counts.text / total) * 100).toFixed(1), color: '#8884d8' },
//         { name: 'Call', value: counts.call, percentage: ((counts.call / total) * 100).toFixed(1), color: '#386641' },
//         { name: 'Video', value: counts.video, percentage: ((counts.video / total) * 100).toFixed(1), color: '#7bbf59' },
//     ];
// };

//     const data = getChartData();

//     // ৩. কাস্টম Tooltip hover করলে পারসেন্টেজ দেখানোর জন্য
//     const CustomTooltip = ({ active, payload }) => {
//         if (active && payload && payload.length) {
//             const dataPoint = payload[0].payload;
//             return (
//                 <div className="bg-gray-800 text-white p-3 rounded-lg shadow-xl text-sm">
//                     <p className="font-bold">{dataPoint.name}</p>
//                     <p>Total: {dataPoint.value}</p>
//                     <p>Percentage: <span className="text-emerald-400 font-bold">{dataPoint.percentage}%</span></p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     // ৪. কাস্টম লিজেন্ড (আপনার ডিজাইনের মতো গোল ডট)
//     const renderLegend = (props) => {
//         const { payload } = props;
//         return (
//             <div className="flex justify-center gap-6 mt-4">
//                 {payload.map((entry, index) => (
//                     <div key={`item-${index}`} className="flex items-center gap-2">
//                         <div style={{ backgroundColor: entry.color }} className="w-3 h-3 rounded-full"></div>
//                         <span className="text-gray-600 text-sm font-medium">{entry.value}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-10 bg-white shadow-xl rounded-2xl mt-12">
//             {/* KeenKeeper লোগো এবং নেভিগেশন (ডেমো) */}
//             <div className="flex justify-between items-center mb-10 pb-4 border-b">
//                 <h2 className="text-2xl font-bold text-gray-700">KeenKeeper</h2>
//                 <div className="flex gap-4 text-sm text-gray-500">
//                     <p>Home</p>
//                     <p>Timeline</p>
//                     <p className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-md">Stats</p>
//                 </div>
//             </div>

//             <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Friendship Analytics</h1>
//             <p className="text-gray-500 mb-10">By Interaction Type</p>

//             <div className="w-full h-96 flex flex-col items-center">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                         {/* Donut Chart করার জন্য: innerRadius ও gap */}
//                         <Pie
//                             data={data}
//                             dataKey="value"
//                             nameKey="name"
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={70} // Donut এর মাঝের ফাঁকা অংশ
//                             outerRadius={100}
//                             fill="#8884d8"
//                             paddingAngle={5} // সেকশনগুলোর মাঝে ফাঁকা জায়গা
//                             cornerRadius={10} // কোণা গোল করার জন্য
//                         >
//                             {/* প্রতিটি সেকশনের রঙ ডায়নামিকভাবে সেট করা */}
//                             {data.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
//                             ))}
//                         </Pie>
                        
//                         {/* কাস্টম Tooltip (Hover logic) */}
//                         <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        
//                         {/* কাস্টম লিজেন্ড */}
//                         <Legend content={renderLegend} verticalAlign="bottom" height={36}/>
//                     </PieChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// };

// export default FriendshipAnalytics;