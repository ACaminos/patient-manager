import { useState, useEffect } from 'react'

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando formulario');

    //validacion del formulario
    if([nombre, propietario, email, fecha, sintomas ].includes('')){
      console.log("hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false)
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''} <span className='text-indigo-600 font-bold'>Administralos</span></p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="" onSubmit={handleSubmit}>
        { error && (
          <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded-md'>
            <p>Todos los campos son obligatorios</p>
          </div>
          ) }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" name="" id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) } placeholder='Nombre de la mascota'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" name="" id="propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } placeholder='Nombre del propietario'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" name="" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Email contacto propietario'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" name="" id="alta" value={fecha} onChange={ (e) => setFecha(e.target.value) } />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } placeholder='Describe los sintomas' />
        </div>
        <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' type="submit" value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario