import { configureStore } from '@reduxjs/toolkit'

import usersSliceReducer from '../slices/usersSlice'

export const store = configureStore({
    reducer: {

        users: usersSliceReducer,
    },
})