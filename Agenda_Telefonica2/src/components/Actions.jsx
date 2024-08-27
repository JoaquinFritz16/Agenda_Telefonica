import axios from "axios";
import { toast } from "react-toastify";
function Actions({personId, onDelete}){
    const db='http://localhost:3000/people';

    const handleDelete = () => {
        axios.delete(`${db}/${personId}`)
        .then(()=>{
            onDelete(personId)
            toast.success("Persona eliminada correctamente de la base de datos")
        })
        .catch((error)=>{
            toast.error("Error al eliminar el usuario de la base de datos")
            console.log(error)
        });
    };
    return(
        <><button onClick={handleDelete}>Eliminar</button></>
    )
}
export default Actions;