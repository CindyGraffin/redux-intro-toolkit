import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

// create a redux store
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
export const store  = configureStore({
    // we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    reducer: {
        counter: counterReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch