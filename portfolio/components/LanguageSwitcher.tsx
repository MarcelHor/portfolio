'use client';
import {useRouter, usePathname} from 'next/navigation';
import {useTransition} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (language: string) => {
        if (isPending) return;
        startTransition(() => {
            const newUrl = pathname.replace(/^\/(en|cs)/, `/${language}`);
            router.push(newUrl);
        });
    };

    return (
        <div className="dropdown dropdown-end mouse-hover">
            <div tabIndex={0} role="button" className={"btn btn-ghost"}>
                <FontAwesomeIcon icon={faGlobe} size="xl"/>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-base-200  mt-3 z-50 p-2 shadow-md rounded-box w-36">
                <li className="flex flex-row items-center space-x-2">
                    <span onClick={() => changeLanguage('cs')}>
                         <img width="24" src="https://img.icons8.com/color/48/czech-republic.png"
                              alt="czech-republic"/> Čestina
                    </span>
                </li>
                <li>
                    <span onClick={() => changeLanguage('en')}>
                    <img width="24" src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
                    English
                </span>
                </li>
            </ul>
        </div>

    )
        ;
};

export default LanguageSwitcher;