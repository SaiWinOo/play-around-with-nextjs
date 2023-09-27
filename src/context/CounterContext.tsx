import React, {useState, createContext, useContext} from "react";

type ContextType = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
const CounterContext = createContext({} as ContextType);
const Provider = ({children}: { children: React.ReactNode }) => {

    const [count, setCount] = useState(2);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const value: ContextType = {
        count,
        increment,
        decrement,
        reset
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}


export {CounterContext};
export default Provider;