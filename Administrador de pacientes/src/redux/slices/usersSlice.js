import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase/firebase.config"
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';

const initialState = {
    isLoading: false,
    users: []
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { dispatch }) => {
        try {
            const res = await getDocs(collection(db, 'users'));
            const data = []
            res.forEach((doc) => {
                const user = { ...doc.data(), id: doc.id }
                data.push({ ...user })
            });

            dispatch(getDataUsers({ users: data }))

        } catch (error) {

        }
    }
);
export const setUsers = createAsyncThunk(
    'users/setUsers',
    async ({ newUser, id }) => {
        try {
            const res = await setDoc(doc(db, 'users', id), newUser);
            return { ...newUser, id: id }

        } catch (error) {

        }

    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getDataUsers: (state, action) => {
            state.users = action.payload.users
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setUsers.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(setUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        })
    }


})

// Action creators are generated for each case reducer function
export const { getDataUsers } = usersSlice.actions

export default usersSlice.reducer