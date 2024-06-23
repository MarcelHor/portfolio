import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="md:text-5xl text-4xl font-bold text-center uppercase mb-8 text-primary">Contact Me</h2>
            <p className={"text-xl text-center mb-16"}>
                I&apos;m here to help! If you have any questions, comments, or just want to say hi, feel free to reach
                out.
                I&apos;ll get back to you as soon as possible.
            </p>

            <div
                className="flex flow-col md:flex-row justify-between space-x-32 md:space-x-32 w-full h-full space-y-10 md:space-y-0">

                <form className="form-control flex flex-col md:w-1/2 mx-auto space-y-4">
                    <h3 className={"text-2xl uppercase text-secondary font-bold"}>Contact form</h3>
                    <input type="text" placeholder="Name"
                           className="input input-bordered"/>
                    <input type="text" placeholder="Email"
                           className="input input-bordered"/>
                    <textarea placeholder="Message"
                              className="textarea textarea-bordered h-32"/>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>

                <div className="flex flex-col md:w-1/2 mx-auto space-y-8">

                    <div className={"text-lg flex flex-col"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>Contact info</h3>
                        <div className={"flex flex-col space-y-2"}>
                            <span className={""}><FontAwesomeIcon icon={faEnvelope}/> Email: mar.horv22@gmail.com</span>
                            <span><FontAwesomeIcon icon={faBriefcase}/> ICO: 21234761</span>
                        </div>
                    </div>

                    <div className={"text-lg"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>Socials</h3>
                        <div className={"flex flex-row space-x-2"}>
                            <a href="#" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faGithub}/>
                            </a>
                            <a href="#" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
