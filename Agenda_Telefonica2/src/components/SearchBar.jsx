function SearchBar({search, setSearch, people, setFilteredPeople}){
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value===''){
            setFilteredPeople(people);
        }else{
            setFilteredPeople(
                people.filter((person)  =>
                    person.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    person.surname.toLowerCase().startsWith(value.toLowerCase())
                )
            )
        }
    }
    return(
        <input type="search" value={search}
        onChange={handleSearch}></input>
    )
}
export default SearchBar