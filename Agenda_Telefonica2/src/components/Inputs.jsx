import { useState} from "react";
import { toast } from "react-toastify";
import './Inputs.css'
function Inputs({addPeople}){
    const [datos, setDatos] = useState({
        name: '',
        surname:'',
        age:0,
        numTel:0
    })
    const handleChange = (e) => {
        const {id, value} = e.target;
        setDatos(prevDatos => ({
            ...prevDatos,
            [id]: id === 'age' ? Number(value):value
        }) );
    };
    const validationName = (name) => {
        if(name.trim() === ""){
            return "El nombre no puede estar vacio"
        } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)){
            return "El nombre solo puede contener letras validas"
        } else if(name.length < 3) {
            return "El nombre debe tener al menos 3 caracteres"
        }
    }
    const validationSurname = (surname) => {
        if(surname.trim() === ""){
            return "El apellido no puede estar vacio"
            } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(surname)){
                return "El apellido solo puede contener letras validas"
            } else if(surname.length < 2){
                return "El apellido debe tener al menos 2 caracteres"
            }
    }
    const validationAge = (age) => {
        if(age < 0 || age > 120){
            return "La edad debe ser un valor entre 0 y 120"
        }
    }
    const validationNumTel = (numTel) => {
        if(!/^\d{3}-\d{3} \d{4}$/.test(numTel)){
            return "El numero de telefono debe tener el siguiente formato XXX-XXX XXXX"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validName=validationName(datos.name)
        const validSurname=validationSurname(datos.surname)
        const validAge=validationAge(datos.age)
        const validNumTel=validationNumTel(datos.numTel)
        if(validName || validSurname || validAge || validNumTel){
            toast.error(validName || validSurname || validAge || validNumTel)
        } else {
        addPeople(datos)
        setDatos({name:'', surname:'', age:0, numTel:0})
        toast.success('Persona agregada')
        console.log(datos);
        }
    }
    return(
        <form onSubmit={handleSubmit} className="Form-content">
            <label>Enter a name: </label>
            <input onChange={handleChange} id="name" value={datos.name}  type="text"></input>
            <label>Enter a surname</label>
            <input onChange={handleChange} id="surname"    value={datos.surname}    type="text"></input>
            <label>Enter an age:</label>
            <input onChange={handleChange} id="age"    value={datos.age}  type="number"></input>
            <label>Enter a telephone number:</label>
            <input onChange={handleChange} id="numTel" value={datos.numTel}  placeholder="xxx-xxx xxxx"  type="text"></input>
            <button type="submit">Agregar</button>

        </form>
    )
}
export default  Inputs;