import Link from "next/link"
import Router, { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return(
        <nav className="">
            <Link href="/">
                <a className={`p-6 w-50 block hover:text-gray-900 ${router.pathname == "/" ? "bg-blue-900" : ""}`}>First Experiment</a>
            </Link>
            <Link href="/second">
                <a className={`p-6 w-50 block hover:text-gray-900" ${router.pathname == "/second" ? "bg-blue-900" : ""}`}>Second Experiment</a>
            </Link>
            <Link href="/third">
                <a className={`p-6 w-50 block hover:text-gray-900" ${router.pathname == "/third" ? "bg-blue-900" : ""}`}>Third Experiment</a>
            </Link>
            <Link href="/fourth">
                <a className={`p-6 w-50 block hover:text-gray-900" ${router.pathname == "/fourth" ? "bg-blue-900" : ""}`}>Fourth Experiment</a>
            </Link>
        </nav>
    )
}

export default Navbar;