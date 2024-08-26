import NavBar from "./NavBar";
import './Header.css'
function Header(){
    return(
        <>
        <header className='flex-container'>
            <img src="eye.png" alt="logo"  className='logo'/>

            <NavBar />
        </header>
        </>
    )
}
export default Header;