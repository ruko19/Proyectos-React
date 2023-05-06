import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from "../../firebase/firebase.config"
import { toast } from 'react-toastify';

const initialState = {
    ilLoading: false,
    pacientes: []

}


export const fetchDataPacientes = createAsyncThunk(
    'pacientes/fetchDataPacientes',
    async (_, { dispatch }) => {
        try {
            const res = await getDocs(collection(db, 'pacientes'));
            const dataP = [];
            res.forEach((doc) => {
                const paciente = { ...doc.data(), id: doc.id }
                dataP.push({ ...paciente });
            })
            dispatch(getDataPacientes({ pacientes: dataP }))


        } catch (error) {
            console.log(error);

        }
    }

);

export const sendPacientes = createAsyncThunk(
    "pacientes/sendPacientes",
    async (newPaciente) => {
        try {
            const res = (await addDoc(collection(db, "pacientes"), newPaciente)).id;

            return { ...newPaciente, id: res };

        } catch (error) {
            console.log(error);

        }

    }
);

export const deletePaciente = createAsyncThunk(
    "pacientes/deletePaciente",
    async (id) => {
        try {
            const res = await deleteDoc(doc(db, "pacientes", id))
            return id


        } catch (error) {

        }

    }
);

export const updatePacientes = createAsyncThunk(
    'pacientes/updatePacientes',
    async (paciente) => {

        try {
            const res = await updateDoc(doc(db, 'pacientes', paciente.id), paciente.paciente);
            return paciente
        } catch (error) {

        }
    }
)


export const pacientesSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers: {
        getDataPacientes: (state, action) => {
            state.pacientes = action.payload.pacientes
        }

    },
    extraReducers: (builder) => {
        builder.addCase(sendPacientes.pending, (state, action) => {
            state.ilLoading = true

        });
        builder.addCase(sendPacientes.fulfilled, (state, action) => {
            state.ilLoading = false;
            state.pacientes.push(action.payload)

        });
        builder.addCase(deletePaciente.pending, (state, action) => {
            state.ilLoading = true
        });
        builder.addCase(deletePaciente.fulfilled, (state, action) => {
            state.ilLoading = false;
            state.pacientes = state.pacientes.filter(i => i.id !== action.payload)
        });
        builder.addCase(updatePacientes.pending, (state, action) => {
            state.ilLoading = true

        });
        builder.addCase(updatePacientes.fulfilled, (state, action) => {
            state.ilLoading = false


            const index = state.pacientes.findIndex(paciente => paciente.id === action.payload.id)
            state.pacientes[index] = action.payload.paciente
        });


    }
})

export const { getDataPacientes } = pacientesSlice.actions

export default pacientesSlice.reducer