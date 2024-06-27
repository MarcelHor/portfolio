import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
    return (
        <header
            className="navbar h-16 px-4 xl:px-32 backdrop-blur-xl bg-transparent border-b-2 border-opacity-5 border-white sticky top-0 z-50">
            <div className="flex items-center justify-between w-full ">
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-200 mt-3 z-50 p-2 shadow-md rounded-box w-52">
                            <li><Link href={"#home"}>Home</Link></li>
                            <li><Link href={"#about"}>About</Link></li>
                            <li><Link href={"#projects"}>Projects</Link></li>
                            <li><Link href={"#contact"} className="btn btn-primary btn-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">Marcel Horváth</Link>
                </div>
                <div className="md:hidden">
                    <LanguageSwitcher/>
                </div>
            </div>

            <nav className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal flex items-center space-x-2">
                    <li><Link href={"#home"}>Home</Link></li>
                    <li><Link href={"#about"}>About</Link></li>
                    <li><Link href={"#projects"}>Projects</Link></li>
                    <li><Link href={"#contact"} className="btn btn-primary btn-sm">Contact</Link></li>
                </ul>
                <LanguageSwitcher/>
            </nav>
        </header>
    );
}