// import React from 'react';

import { useContext } from "react";
import { CallContext } from "../context/CallContext";

const Friendpage = () => {
const {storeCallList} = useContext(CallContext);
console.log(storeCallList);

    return (
        <div>
           <h2> kisui naiga</h2>
        </div>
    );
};

export default Friendpage;