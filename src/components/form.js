import '../styles/form.css';
function Form() {
    return(
        <form className="tarea-form">
            <input className="tarea-input" type='text' placeholder='Agregar tarea' name='texto'/>

            <button className="tarea-button">
                Agregar tarea
            </button>
        </form>
    );
}

export default Form