import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import Navbar from '../../components/navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify"

import { deletePaciente, fetchDataPacientes, sendPacientes, updatePacientes } from '../../redux/slices/pacientesSlice';


const Home = () => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [selectedPacienteId, setSelectedPacienteId] = useState(null);



    const newPaciente = {
        nombre,
        propietario,
        email,
        sintomas
    }
    const notiflySend = () => {
        toast.success('se ha creado con exito')
    }
    const notiflyUpdate = () => {
        toast.success('se ha Actualizado con exito')
    }


    const { pacientes } = useSelector(state => state.pacientes);
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendPacientes(newPaciente))
        notiflySend()

    };
    const handleDelete = (id) => {
        dispatch(deletePaciente(id))

    };
    const Updatedata = (id) => {
        const paciente = pacientes.find(p => p.id === id);
        if (paciente) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setSintomas(paciente.sintomas)
        }

    }

    const handleUpdate = (id) => {

        dispatch(updatePacientes({ id, paciente: newPaciente }))
        notiflyUpdate()
    }


    useEffect(() => {
        dispatch(fetchDataPacientes())


    }, [])

    return (
        <div className='w-full h-screen bg-white '>
            <Navbar />
            <ToastContainer />
            <main className='grid grid-cols-12'>
                <section className=' text-center col-span-5 '>
                    <h2 className='text-3xl font-bold mt-10'>Administrador de Pacientes</h2>
                    <p className='text-xl'>Añade tus pacientes y <span className='text-slate-600'>Administralos</span></p>
                    <form onSubmit={handleSubmit} className='mt-9 w-96 mx-auto '>
                        <div className=''>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Nombre de la Mascota</span>
                                </label>
                                <input onChange={e => setNombre(e.target.value)} type="text" placeholder="Nombre de la Mascota" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Nombre del propietario</span>
                                </label>
                                <input onChange={e => setPropietario(e.target.value)} type="text" placeholder="Nombre del propietario" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email Propietario</span>
                                </label>
                                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email del propietario" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Sintomas</span>
                                </label>
                                <textarea onChange={e => setSintomas(e.target.value)} placeholder="Describe los sintomas" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <button className="btn mt-10 w-full bg-cyan-500 text-slate-600">Agregar Paciente</button>
                    </form>
                </section >

                <section className='text-center col-span-7 pr-8'>
                    {
                        pacientes.length == 0
                            ?
                            <div>
                                <p className='text-3xl'>no hay pacientes...</p>
                            </div>
                            :
                            <div>
                                <h1 className='text-3xl font-bold mt-10'>Listado de pacientes</h1>
                                <p className='text-xl' >Administra tus <span className='text-slate-600' >Pacientes y Citas</span></p>
                                {
                                    pacientes.map((i) => (

                                        <div key={i.id} >

                                            <div className='text-left text-lg font-bold shadow-2xl bg-slate-100 p-8 mt-8'>
                                                <p>Nombre: {i.nombre}</p>
                                                <p>Propietario: {i.propietario}</p>
                                                <p>Email Contacto: {i.email}</p>
                                                <p>Fecha de Alta:</p>
                                                <p>Sintomas: {i.sintomas}</p>


                                                {/* The button to open modal */}
                                                <label htmlFor={i.id} className="btn">Editar</label>

                                                {/* Put this part before </body> tag */}
                                                <input onClick={() => Updatedata(i.id)} type="checkbox" id={i.id} className="modal-toggle" />
                                                <label htmlFor={i.id} className="modal cursor-pointer">

                                                    <label className="modal-box relative" htmlFor="">

                                                        <form onSubmit={handleUpdate} className='mt-9 w-96 mx-auto '>
                                                            <div className=''>
                                                                <div className="form-control w-full ">
                                                                    <label className="label">
                                                                        <span className="label-text">Nombre de la Mascota</span>
                                                                    </label>
                                                                    <input defaultValue={i.nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Nombre de la Mascota" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <label className="label">
                                                                        <span className="label-text">Nombre del propietario</span>
                                                                    </label>
                                                                    <input defaultValue={i.propietario} onChange={e => setPropietario(e.target.value)} type="text" placeholder="Nombre del propietario" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <label className="label">
                                                                        <span className="label-text">Email Propietario</span>
                                                                    </label>
                                                                    <input defaultValue={i.email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email del propietario" className="input input-bordered w-full " />
                                                                </div>

                                                                <div className="form-control w-full max-w-xs">
                                                                    <label className="label">
                                                                        <span className="label-text">Sintomas</span>
                                                                    </label>
                                                                    <textarea defaultValue={i.sintomas} onChange={e => setSintomas(e.target.value)} placeholder="Describe los sintomas" className="input input-bordered w-full " />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button onClick={() => handleUpdate(i.id)} className="btn mt-10 w-full bg-cyan-500 text-slate-600">Actualizar</button>

                                                    </label>



                                                </label>


                                                <button onClick={() => handleDelete(i.id)} className="btn btn-error">Eliminar</button>

                                            </div>



                                        </div>

                                    ))
                                }
                            </div>

                    }
                </section>
            </main>
        </div >
    )
}

export default Home