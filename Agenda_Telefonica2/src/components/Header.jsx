import SearchBar from "./SearchBar";
import './Header.css'
function Header({search, setSearch, setFilteredPeople, people}){
    return(
        <>
        <header className='flex-container'>
            <img src="eye.png" alt="logo"  className='logo'/>

            <SearchBar
            search={search}
            setSearch={setSearch}
            setFilteredPeople={setFilteredPeople}
            people={people} />
        </header>
        </>
    )
}
export default Header;