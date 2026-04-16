import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const CallContext = createContext();
const CallProvider = ({children}) => {
const [storeCallList,setStoreCallList] = useState([]);

const handleActivity = (person,activeType)=>{

const numericID = parseInt(person.id);

const isExist =  storeCallList.find((item)=>parseInt (item.id)===numericID && item.type===activeType);
if(isExist){
toast.error(`This ${activeType}is already in timeline`);}
else{
    const newActivity = {...person,type:activeType};

    
    
    setStoreCallList([...storeCallList,newActivity])
toast.success(`${person.name} ${activeType} added the timeline`)
}

console.log(storeCallList);
}



    const data ={
       storeCallList,setStoreCallList,handleActivity
    }
    return <CallContext.Provider value={data}>{children}</CallContext.Provider>
};

export default CallProvider;