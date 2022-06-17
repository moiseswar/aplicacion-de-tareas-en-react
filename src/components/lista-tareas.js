import Form from "./form";
import '../styles/lista.css'
import { useState } from "react";
import Tarea from "./tarea";

function Lista_tareas() {
    const [tareas, setTares] = useState([]);
    const agregartarea= tarea => {
        
    }
    return(
        <>
            <Form/>
            <div className="lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea
                            texto = {tarea.texto}
                            completada = {tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Lista_tareas