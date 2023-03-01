import { FunctionComponent, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { increment,decrement } from "./features/counterSlice";
import sampleReducer from "./features/messageSlice";

interface CounterProps{
    
}

const Counter:FunctionComponent<CounterProps> = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return(
        <div>
            <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            
        </div>
      </div>
    )
}

export default Counter;
