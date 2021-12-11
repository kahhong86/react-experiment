import { type } from "os";
import Navbar from "./navbar"

const Header = () =>{
    return(
        <header className="fixed left-0 bg-blue-500 text-white">
            <Navbar />
        </header>
    )
}

export default Header;