import Link from "next/link"

const Navbar = () => {
    return(
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/first">
                <a className="mr-5 hover:text-gray-900" >First Experiment</a>
            </Link>
            <Link href="/second">
                <a className="mr-5 hover:text-gray-900">Second Experiment</a>
            </Link>
            <Link href="/third">
                <a className="mr-5 hover:text-gray-900">Third Experiment</a>
            </Link>
            <Link href="/fourth">
                <a className="mr-5 hover:text-gray-900">Fourth Experiment</a>
            </Link>
        </nav>
    )
}

export default Navbar;