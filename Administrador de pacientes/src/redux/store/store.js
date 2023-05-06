import { configureStore } from '@reduxjs/toolkit'

import pacientesSliceReducer from '../slices/pacientesSlice'
import usersSliceReducer from '../slices/usersSlice'

export const store = configureStore({
    reducer: {
        users: usersSliceReducer,
        pacientes: pacientesSliceReducer,
    },
})