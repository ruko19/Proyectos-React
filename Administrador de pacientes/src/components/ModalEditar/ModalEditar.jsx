import React from 'react'

const ModalEditar = ({ paciente, data }) => {



    const { id, nombre, sintoma, propietario } = paciente;
    const handleDev = () => {
        alert(nombre)
    }

    return (
        <div>
            <label htmlFor={`my-modal-${id}`} className="btn">Editar</label>
            <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">

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

            </label>
        </div>
    )
}

export default ModalEditar