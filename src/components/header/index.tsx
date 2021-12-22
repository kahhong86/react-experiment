import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";
import { assetsUrl } from "../../../utils/backend-url";

const Header = () =>{
    return(
        <header className="fixed left-0 bg-blue-500 text-white">
            <Link href="/">
                <a className="border-b-2 border-solid border-white py-2 md:mx-5 block">
                    <div className="w-12 md:w-auto text-center ">
                        <Image 
                            src={assetsUrl + "/shared/Logo-blend.png"}
                            width="100"
                            height="100"
                            alt="Prince"
                        />
                    </div>
                </a>
            </Link>
            <Navbar />
        </header>
    )
}

export default Header;