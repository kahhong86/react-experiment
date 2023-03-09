import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


interface array{
  message:string,
  edit:boolean,
  check:boolean,
}

// Define a type for the slice state
interface CounterState {
  data: any,
}

// Define the initial state using that type
const initialState: CounterState = {
  data: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createList: (state, action: PayloadAction<array>) => {
        state.data.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<array>) => {
        state.data.splice(action.payload,1);
    },
    updateItem: (state, action: PayloadAction<any>) => {
        const msg = action.payload.message;
        const index = action.payload.index;
        state.data[index].message = msg;
        state.data[index].edit = false;
    },
    editItem: (state,action: PayloadAction<string>) => {
        state.data[action.payload].edit = true;
    },
    checkItem: (state,action: PayloadAction<any>) => {
        if(state.data[action.payload].check == true){
            state.data[action.payload].check = false;
        }else{
            state.data[action.payload].check = true;
        }
    }
  },
})

export const { createList, deleteItem, editItem, updateItem, checkItem } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer