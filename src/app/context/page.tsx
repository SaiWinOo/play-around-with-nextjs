'use client';

import React, {useContext} from 'react';
import Provider from "@/context/CounterContext";
import useCounterContext from "@/hooks/use-counter-context";

const Page = () => {
    return (
        <Provider>
            <Counter/>
        </Provider>

    );
};

export default Page;

const Counter = () => {

    const {count,increment} = useCounterContext();

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>Increment Counter</button>
        </div>
    )
}