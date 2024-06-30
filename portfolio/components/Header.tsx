import {Link} from "@/lib/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useTranslations} from "next-intl";

export default function Header() {
    const t = useTranslations('header');

    return (
        <header
            className="navbar h-16 px-4 xl:px-32 backdrop-blur-custom bg-transparent border-b-2 border-opacity-5 border-white sticky top-0 z-40">
            <div className="flex items-center justify-between w-full md:w-auto">
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
                            className="menu  dropdown-content bg-base-200 mt-3 z-50 p-2 shadow-md rounded-box w-52">
                            <li><Link href={"/#home"}>{t('home')}</Link></li>
                            <li><Link href={"/#about"}>{t('about')}</Link></li>
                            <li><Link href={"/projects"}>{t('projects')}</Link></li>
                            <li><Link href={"/#contact"} className="btn btn-primary btn-sm">{t('contact')}</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">Marcel Horváth</Link>
                </div>
                <div className="md:hidden">
                    <LanguageSwitcher/>
                </div>
            </div>

            <nav className="navbar-end w-full hidden md:flex">
                <ul className="menu menu-horizontal flex flex-row items-center space-x-2">
                    <li><Link href={"/#home"}>{t('home')}</Link></li>
                    <li><Link href={"/#about"}>{t('about')}</Link></li>
                    <li><Link href={"/projects"}>{t('projects')}</Link></li>
                    <li><Link href={"/#contact"} className="btn btn-primary btn-sm">{t('contact')}</Link></li>
                    <LanguageSwitcher/>
                </ul>
            </nav>
        </header>
    );
}