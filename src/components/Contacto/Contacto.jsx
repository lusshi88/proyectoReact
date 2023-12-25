import React from 'react'
import "./Contacto.css"
import { useForm } from 'react-hook-form'

function Contacto() {

  const {register,handleSubmit} = useForm();
  const enviar = (info) =>{
    console.log(info);
  }
  return (
    <div className='container-contacto'>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} />
        <input type="email" placeholder='Ingrese su email' {...register("email")} />
        <input type="number" placeholder='Ingrese su número de telefono' {...register("celular")} />

        <button className='enviar' type='submit'>Enviar</button>

        </form>

    </div>
  )
}

export default Contacto