import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-300 xl:px-32 border-t-2 border-opacity-5 border-white">
            <aside>
                <p className={"footer-title"}>Marcel Horváth</p>
                <p>© 2024 All rights reserved.</p>
            </aside>
            <div>
                <h3 className={"footer-title"}>Contact</h3>
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
        </footer>
    )
}