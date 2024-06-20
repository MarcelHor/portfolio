export default function Header() {
    return (
        <header
            className="navbar h-16 px-32 backdrop-blur-xl bg-transparent border-b-2 border-opacity-5 border-white sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>

                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">Marcel Horváth</a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal flex items-center space-x-2">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <button className="btn btn-primary btn-sm">Contact</button>
                </ul>
            </div>
        </header>
    );
}