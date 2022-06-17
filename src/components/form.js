import { useState } from 'react';
import '../styles/form.css';
import {v4 as uuidv4} from 'uuid';
function Form(props) {

    const[input, setIntput] = useState('');

    const manejarcambio = c => {
        setIntput(c.target.value);
    };
    const manejarenvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva);
    };

    return(
        <form className="tarea-form" onSubmit={manejarenvio}>
            <input className="tarea-input" type='text' placeholder='Agregar tarea' name='texto' onChange={manejarcambio}/>
            <button className="tarea-button">
                Agregar tarea
            </button>
        </form>
    );
};

export default Form;