import Actions from "./Actions";
function Table({people, onDelete}){
    return(
        <>
        <table>
            <colgroup span="6"></colgroup>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Tel</th>
                <th>Actions</th>
            </tr>
            <tr>
                {people.map((person)=>(
                    <tr key={person.id}>
                        <th>{person.id}</th>
                        <th>{person.name}</th>
                        <th>{person.surname}</th>
                        <th>{person.age}</th>
                        <th>{person.numTel}</th>
                        <th><Actions personId={person.id} onDelete={onDelete}></Actions></th>
                    </tr>
                ))
                }
            </tr>
        </table>
        </>
    )
}
export default Table;