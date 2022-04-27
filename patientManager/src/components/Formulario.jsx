import { useState, useEffect } from 'react'

function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando formulario');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''} <span className='text-indigo-600 font-bold'>Administralos</span></p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="" onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" name="" id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) } placeholder='Nombre de la mascota'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" name="" id="propietario" placeholder='Nombre del propietario'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" name="" id="email" placeholder='Email contacto propietario'  />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" name="" id="alta" />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los sintomas' id="sintomas" />
        </div>
        <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' type="submit" value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario