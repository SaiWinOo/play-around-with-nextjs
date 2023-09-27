import {useContext} from 'react';
import {CounterContext} from "@/context/CounterContext";

const useCounterContext = () => {
    return useContext(CounterContext);
};

export default useCounterContext;