import React, {useEffect, useRef, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline";

const Page = () => {
    const [open, setOpen] = useState(false);
    const divEl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (event) => {
            if(!divEl?.current?.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('click',handler,true);
        return () => {
            document.removeEventListener('click',handler,true);
        }
    }, []);

    const handleClickOnOption = () => {
        console.log('click on option');
        setOpen(false)
    }

    return (
        <div ref={divEl} className={'this'}>
            <div className={'cursor-pointer border p-2 flex justify-between items-center '} onClick={()=> setOpen(pre => !pre)}>
                <p>Select...</p>
                <p><ChevronRightIcon className={'w-5 h-5 transition-all duration-300 ' + (open ? 'rotate-90' : 'rotate-0')} /></p>
            </div>
            {
                open &&
                <div onClick={handleClickOnOption} className={'border p-2'}>
                    <p>This is element one</p>
                    <p>This is element two</p>
                    <p>This is element three</p>
                </div>
            }
        </div>
    );
};

export default Page;
