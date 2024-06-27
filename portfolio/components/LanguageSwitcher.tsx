'use client';
import {useRouter} from 'next/navigation';
import {useTransition} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const changeLanguage = (language: string) => {
        if (isPending) return;
        startTransition(() => {
            router.replace(`/${language}`);
        });
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className={"btn btn-ghost"}>
                <FontAwesomeIcon icon={faGlobe} size="xl"/>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-base-200 rounded-box z-10">
                <li>
                    <span onClick={() => changeLanguage('cs')}>Čeština</span>
                </li>
                <li>
                    <span onClick={() => changeLanguage('en')}>English</span>
                </li>
            </ul>
        </div>

    );
};

export default LanguageSwitcher;