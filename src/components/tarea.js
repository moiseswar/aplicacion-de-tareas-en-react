import '../styles/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({texto,completada,id, completarTarea, elimnarTarea}) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </div>
    );
}
export default Tarea