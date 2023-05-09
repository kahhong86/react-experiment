import Link from "next/link"
import Router, { useRouter } from "next/router";
import { NavigationItem } from "./item";

const Navbar = () => {
    const router = useRouter();

    return(
        <nav className="lg:overflow-y-scroll lg:h-[80vh] ">
            {NavigationItem.map(({name,small_name,url},index) => {
                return(
                    <Link href={url} key={index}>
                        <a className={`w-12 py-2 md:py-3 text-center md:text-left md:p-6 md:w-50 block hover:text-gray-900 ${router.pathname == `${url}` ? "bg-blue-900" : ""}`}>
                            <span className="hidden md:block">{name}</span>
                            <span className="block md:hidden text-2xl">{small_name}</span>
                        </a>    
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;