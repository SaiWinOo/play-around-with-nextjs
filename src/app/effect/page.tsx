'use client';

import React, {useCallback, useEffect, useState} from 'react';
import counterContext from "@/context/CounterContext";

const Page = () => {
    const [counter, setCounter] = useState(0);

    console.log('render');

    const increment = useCallback(() => {
        setCounter(pre => pre +1);
    }, []);

    useEffect(() => {
        const listener = () => {
            console.log('click');
        }

        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('click', listener);
        }
    });

    return (
        <div>
            <Counter counter={counter} increment={increment} />
        </div>
    );
};

export default Page;

type CounterProps = {
    counter: number;
    increment: () => void;
};

const Counter = ({counter , increment} :  CounterProps) => {

    useEffect(() => {
        increment();
        console.log('counter', counter);
    }, [increment]);
    return (
        <div>
            <h4>{counter}</h4>
            <button onClick={increment}>increment</button>
        </div>
    )
}