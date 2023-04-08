import {React, useEffect, useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telelefono, setTelefono] = useState("");
    const [textArea, setTextArea] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validateForm();
    }, [name, email, telelefono, textArea])

    const validateForm = () => {
        let errors = {};
        if (!name) {
            errors.name = "Falta nombre";
        }
        if (!email) {
            errors.email = "Falta correo";
        } 
        if (telelefono && telelefono.trim().length < 7) {
            errors.telelefono = "El teléfono no es válido";
        }
        if (textArea.length < 10) {
            errors.textArea = "Mensaje corto";
        }
        setErrors(errors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0) {
            console.log("Formulario enviado");
            alert("Gracias, estaremos en contacto "  + name )
        } else {
            console.log("Formulario invalido ", {errors});
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Juan Pardo"} required onChange={e => setName(e.target.value)} type="text" />
                {errors.name && <div>{errors.name}</div>}
                <input placeholder={"juan@gribu.com"} required onChange={e => setEmail(e.target.value)} type="email" />
                {errors.email && <div>{errors.email}</div>}
                <input placeholder={"3001234567"} onChange={e => setTelefono(e.target.value)} type="tel" />
                {errors.telelefono && <div>{errors.telelefono}</div>}
                <textarea placeholder={"Contactos"} required onChange={e => setTextArea(e.target.value)} name="message" id="#message" cols="30" rows="10"></textarea>
                {errors.textArea && <div>{errors.textArea}</div>}
                {Object.keys(errors).length ===0 && <input type="submit" value={"Enviar"}/>}
            </form>
        </div>
    );
};


export default Form;