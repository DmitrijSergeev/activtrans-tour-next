'use client'
import React from 'react';
import {useRouter} from "next/dist/client/components/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <nav>
            <ul className={'flex gap-4 justify-end mr-30'}>
                <li><button onClick={()=> router.back()}
                            className={'text-green-500 cursor-pointer'}>Back</button></li>
                <li>
                    <button onClick={()=> router.push('/')}
                            className={'text-green-500 cursor-pointer'}>
                    Main
                    </button>
                </li>
                <li><button onClick={()=> router.push('/hello')} className={'text-green-500 cursor-pointer'}>Profile</button></li>
                <li><button onClick={()=> router.push('/hello/contacts')}
                            className={'text-green-500 cursor-pointer'}>Contacts</button></li>
                <li><button onClick={()=> router.forward()}
                            className={'text-green-500 cursor-pointer'}>Forward</button></li>
            </ul>
        </nav>
    );
};

export default Header;