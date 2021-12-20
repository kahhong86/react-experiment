import Link from "next/link"
import Router, { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return(
        <nav className="">
            <Link href="/">
                <a className={`w-12 py-2 md:py-4 text-center md:text-left md:p-6 md:w-50 block hover:text-gray-900 ${router.pathname == "/" ? "bg-blue-900" : ""}`}>
                    <span className="hidden md:block">First Experiment</span>
                    <span className="block md:hidden text-2xl">1</span>
                </a>
            </Link>
            <Link href="/second">
                <a className={`w-12 py-2 md:py-4 text-center md:text-left md:p-6 md:w-50 block hover:text-gray-900" ${router.pathname == "/second" ? "bg-blue-900" : ""}`}>
                    <span className="hidden md:block">Second Experiment</span>
                    <span className="block md:hidden text-2xl">2</span>
                </a>
            </Link>
            <Link href="/third">
                <a className={`w-12 py-2 md:py-4 text-center md:text-left md:p-6 md:w-50 block hover:text-gray-900" ${router.pathname == "/third" ? "bg-blue-900" : ""}`}>
                    <span className="hidden md:block">Third Experiment</span>
                    <span className="block md:hidden text-2xl">3</span>
                </a>
            </Link>
            <Link href="/fourth">
                <a className={`w-12 py-2 md:py-4 text-center md:text-left md:p-6 md:w-50 block hover:text-gray-900" ${router.pathname == "/fourth" ? "bg-blue-900" : ""}`}>
                    <span className="hidden md:block">Fourth Experiment</span>
                    <span className="block md:hidden text-2xl">4</span>
                </a>
            </Link>
        </nav>
    )
}

export default Navbar;