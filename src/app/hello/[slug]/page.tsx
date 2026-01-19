'use client'
import React from 'react';
import {useParams, useSearchParams} from "next/dist/client/components/navigation";

const Contacts = () => {
    const params = useParams()
    const searchParams = useSearchParams()
    return (
        <div>
            Contacts {params.slug}
            <div>{searchParams.get('title')}</div>
        </div>
    );
};

export default Contacts;