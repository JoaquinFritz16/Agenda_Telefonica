import { useState, useEffect} from "react";
import './Inputs.css'
function Inputs(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [tel, setTel] = useState("");

    return(
        <form className="Form-content">
            <label>Enter a name: </label>
            <input type="text"></input>
            <label>Enter a surname</label>
            <input type="text"></input>
            <label>Enter an age:</label>
            <input type="number"></input>
            <label>Enter a telephone number:</label>
            <input type="number"></input>
            <button type="submit">Agregar</button>

        </form>
    )
}
export default  Inputs;