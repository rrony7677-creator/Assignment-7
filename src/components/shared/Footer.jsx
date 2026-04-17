import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
<div className="bg-[#244D3F] text-white mt-0 ">

<div className="items-center text-center justify-center">
<div className="space-y-5">
    <div className="space-y-2">
        <h1 className="font-bold text-4xl pt-20">KeenKeeper</h1>
        <p className="text-gray-300 ">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
    </div>

    <div className ="social space-y-2">
        <div><h2 className="text-xl mb-3.75 font-bold">Social Link</h2></div>
        <div className="flex gap-7 items-center justify-center mb-10">
            <p><FaFacebook /></p>
            <p><FaInstagram/></p>
            <p><FaLinkedin /></p>
        </div>
    </div>
</div>

</div>


<div className=" justify-between flex flex-col md:flex-row text-center items-center container mx-auto text-gray-400 border-t pt-5 pb-10">
<div><h2>© 2026 KeenKeeper. All rights reserved.</h2></div>
<div>
    <ul className="flex gap-7 ">
        <li>
            Privacy POlicy
        </li>
        <li>
        Terms of service
        </li>
        <li>
            Cookies
        </li>
    </ul>
</div>
</div>

</div>
    );
};

export default Footer;