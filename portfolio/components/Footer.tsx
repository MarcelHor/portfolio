import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useTranslations} from "next-intl";


export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="footer p-10 bg-base-300 xl:px-32 border-t-2 border-opacity-5 border-white">
            <aside>
                <p className={"footer-title"}>Marcel Horváth</p>
                <p>{t('rights')}</p>
            </aside>
            <div>
                <h3 className={"footer-title"}>{t('title')}</h3>
                <span><FontAwesomeIcon icon={faEnvelope} className={"mr-2"}/>mar.horv22@gmail.com</span>
                <div className={"flex flex-row space-x-2 w-full"}>
                    <a href="https://github.com/MarcelHor" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon size="2x" icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/marcel-hor/" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div className={"footer-title normal-case text-sm font-normal"}>
                <span>{t('iconsCredit')} <a href="https://icons8.com">Icons8</a></span>
            </div>
        </footer>
    )
}