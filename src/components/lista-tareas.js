import Form from "./form";
import '../styles/lista.css';
import { useState } from "react";
import Tarea from "./tarea";

function Lista_tareas() {
    const [tareas, setTareas] = useState([]);
    const agregartarea= tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas);
        }
    };

    const eliminartarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    };

    const completartarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        });
        setTareas(tareasActualizadas);
    };

    return(
        <>
            <Form onSubmit={agregartarea}/>
            <div className="lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea
                            key = {tarea.id}
                            id = {tarea.id}
                            texto = {tarea.texto}
                            completada = {tarea.completada}
                            completarTarea = {completartarea}
                            eliminarTarea = {eliminartarea}
                        />
                    )
                }
            </div>
        </>
    );
};

export default Lista_tareas;