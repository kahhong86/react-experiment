import { FunctionComponent } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./features/counterSlice";

interface CounterProps{
    state:{
        counter:number
    }
}

const Counter:FunctionComponent<CounterProps> = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

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
