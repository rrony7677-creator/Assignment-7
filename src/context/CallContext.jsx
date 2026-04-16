import React, { Children, createContext, useState } from 'react';


export const CallContext = createContext();
const CallProvider = ({children}) => {
const [storeCallList,setStoreCallList] = useState([]);

const handleCall = (person)=>{

const numericID = parseInt(person.id);

const isExist =  storeCallList.find((call)=>parseInt (call.id)===numericID);
if(isExist){
alert("The call is already added");}
else{setStoreCallList([...storeCallList,person])
alert(`${person.name} added the call`)
}

console.log(storeCallList);
}



    const data ={
       handleCall,storeCallList,setStoreCallList
    }
    return <CallContext.Provider value={data}>{children}</CallContext.Provider>
};

export default CallProvider;