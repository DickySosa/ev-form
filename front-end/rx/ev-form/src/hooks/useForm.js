import { useState } from 'react'

const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [serverMessage, setServerMessage] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        try {
            if (Object.keys(errors).length > 0) {
                return;
            }
    
            setLoading(true);
    
            const response = await fetch('http://localhost:9000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
    
            const data = await response.json();
            console.log('try json data ---------> ', data);
    
            setServerMessage('Información Enviada')
            setLoading(false);
            setResponse(true);
            
        } catch (error) {
            console.error(error);
            setServerMessage('Un error ocurrió al enviar informacion')
            setLoading(false);
            setResponse(true);
        }

    };

    return (
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        serverMessage
    )
}
export default useForm