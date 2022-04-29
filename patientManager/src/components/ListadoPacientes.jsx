import Paciente from "./Paciente";

function ListadoPacientes({pacientes}){

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>

            {pacientes.map( (paciente) => (
                // <Paciente paciente={paciente} />
                <h1>{paciente.nombre}</h1>
            ))}

        </div>
    )
}
export default ListadoPacientes;