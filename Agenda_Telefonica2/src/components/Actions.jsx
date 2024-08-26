import axios from "axios";
function Actions({personId, onDelete}){
    const db='http://localhost:3000/people';

    const handleDelete = () => {
        axios.delete(`${db}/${personId}`)
        .then(()=>{
            onDelete(personId)
        })
        .catch((error)=>{

        });
    };
    return(
        <><button onClick={handleDelete}>Eliminar</button></>
    )
}
export default Actions;