import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full scroll-my-24" id={"contact"}>
            <h2 className="md:text-5xl text-4xl font-bold text-center uppercase mb-8 text-primary">Contact Me</h2>
            <p className={"text-xl text-center mb-16"}>
                I&apos;m here to help! If you have any questions, comments, or just want to say hi, feel free to reach
                out.
                I&apos;ll get back to you as soon as possible.
            </p>

            <div
                className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-32 w-full h-full space-y-10 md:space-y-0">
                <ContactForm/>

                <div className="flex flex-col w-full md:w-1/2 mx-auto space-y-8">
                    <div className={"text-lg flex flex-col w-full"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>Contact info</h3>
                        <div className={"flex flex-col space-y-2 w-full"}>
                            <span className={""}><FontAwesomeIcon icon={faEnvelope}/> Email: mar.horv22@gmail.com</span>
                            <span><FontAwesomeIcon icon={faBriefcase}/> ICO: 21234761</span>
                        </div>
                    </div>

                    <div className={"text-lg w-full"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>Socials</h3>
                        <div className={"flex flex-row space-x-2 w-full"}>
                            <a href="https://github.com/MarcelHor" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faGithub}/>
                            </a>
                            <a href="https://www.linkedin.com/in/marcel-hor/" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

