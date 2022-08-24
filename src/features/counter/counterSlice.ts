import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.
//Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
interface CounterState {
    value: number;
}

const initialState = {
    value: 0
} as CounterState

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument initialState
    initialState: initialState,
    reducers: {
        increment: state => {
            state.value +=1
        },
        decrement: state => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;