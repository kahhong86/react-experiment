import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface CounterState {
  value: number,
  message: string,
  data: any
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  message: "",
  data: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createList: (state, action: PayloadAction<string>) => {
        state.data.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<any>) => {
        const newData = [...state.data];
        newData.splice(action.payload,1);
        state.data = newData;
    }
  },
})

export const { createList, deleteItem } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer