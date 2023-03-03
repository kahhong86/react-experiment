import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface CounterState {
  value: number,
  message: string,
  data: any,
  edit:boolean,
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  message: "",
  data: [],
  edit: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createList: (state, action: PayloadAction<any>) => {
        state.data.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<any>) => {
        state.data.splice(action.payload,1);
    },
    updateItem: (state, action: PayloadAction<any>) => {
        console.log('actionpayload',action.payload);
        state.data = action.payload;
    },
    editItem: (state,action: PayloadAction<string>) => {
        state.data[action.payload].edit = true;
    }
  },
})

export const { createList, deleteItem, editItem, updateItem } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer