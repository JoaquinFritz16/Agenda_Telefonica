import Actions from "./Actions";
function Table({people, onDelete}){
    return(
        <>
        <table>
            <colgroup span="5" className="columns"></colgroup>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Tel</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            
                {people.map((person)=>(
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.surname}</td>
                        <td>{person.age}</td>
                        <td>{person.numTel}</td>
                        <td><Actions personId={person.id} onDelete={onDelete}></Actions></td>
                    </tr>
                ))
                }
            
            </tbody>
        </table>
        </>
    )
}
export default Table;