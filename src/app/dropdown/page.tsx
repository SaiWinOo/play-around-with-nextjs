'use client';

import React from 'react';
import Dropdown from "@/app/dropdown/Dropdown";

const Page = () => {
    return (
        <div className={'grid grid-cols-4 gap-4 p-5'}>
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
        </div>
    );
};

export default Page;
