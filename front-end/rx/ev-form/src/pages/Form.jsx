import React from "react";
import { useNavigate } from 'react-router-dom'

const initialForm = {
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    bornDate: '',
    age: '',
    dpi: '',
    email: '',
    department: '',
    municipality: '',
    company: ''
}
const Form = () => {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit}>
            <header>
                <h1>Formulario</h1>
            </header>

            <main>
                <label>Primer Nombre:</label>
                <input  name="" value={initialForm.firstName} className="" onChange={handleChange} type="text" onBlur={handleBlur} required />

                <label>Segundo Nombre:</label>
                <input  name="" value={initialForm.middleName} className="" onChange={handleChange} type="text" onBlur={handleBlur} required />

                <label>Primer Apellido:</label>
                <input  name="" value={initialForm.lastName} className="" onChange={handleChange} type="text" onBlur={handleBlur} required />

                <label>Segundo Apellido:</label>
                <input  name="" value={initialForm.secondLastName} className="" onChange={handleChange} type="text" oonBlur={handleBlur} required />


                <label>Fecha de nacimiento:</label>
                <input  name="" value={initialForm.bornDate} className="" onChange={handleChange} type="date" onBlur={handleBlur} required />

                <label>Edad:</label> <p>{edad}</p>

                <label>Numero de DPI:</label>
                <input  name="" value={initialForm.dpi} className="" onChange={handleChange} type="number" onBlur={handleBlur} required />

                <label>Correo Electrónico:</label>
                <input  name="" value={initialForm.email} className="" onChange={handleChange} type="email" onBlur={handleBlur} required />

                <label>Departamento de nacimiento:</label>
                <label name="" value={initialForm.department} className="" onChange={handleChange} type="email" onBlur={handleBlur} required>Departamento:</label>
                <select>
                    <option></option>
                </select>

                <label name="" value={initialForm.municipality} className="" onChange={handleChange} type="email" onBlur={handleBlur} required>Municipio:</label>
                <select>
                    <option></option>
                </select>

                <label>Empresa:</label>
                <input name="" value={initialForm.company} className="" onChange={handleChange} type="text" onBlur={handleBlur} required />
            </main>

            <br />
            {loading && <Loader />}
            {response &&(
                <Message msg={serverMessage} type={serverMessage === 'Información Enviada' ? 'success' : 'error'} />
            )}
            <footer>
                <button type="submit" disabled>Enviar</button>
            </footer>
        </form>
    )
}
export default Form;