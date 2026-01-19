import React from 'react';
import Image from "next/image";
import logo from './../../../public/img/logo.png'

const Hello = ()=> {
    return (
        <div>
            <Image src={logo} alt={'logo'}/>
            Hello!!!
        </div>
    );
};

export default Hello;