import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import {useTranslations} from "next-intl";
import {Link} from "@/lib/navigation";

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <section className="flex flex-col items-center justify-center w-full h-full scroll-my-24" id={"contact"}>
            <FadeIn as={"h2"} className="md:text-5xl text-4xl font-bold text-center uppercase mb-8 text-primary">
                {t('title')}
            </FadeIn>
            <FadeIn as={"p"} delay={0.1} className={"text-xl text-center mb-16"}>
                {t('description')}
            </FadeIn>

            <div
                className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-32 w-full h-full space-y-10 md:space-y-0">
                <FadeIn delay={0.2} className="w-full md:w-1/2" direction={"right"}>
                    <ContactForm/>
                </FadeIn>

                <FadeIn delay={0.2} direction={"left"} className="flex flex-col w-full md:w-1/2 mx-auto space-y-8">
                    <div className={"text-lg flex flex-col w-full"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>{t('contactTitle')}</h3>
                        <div className={"flex flex-col space-y-2 w-full"}>
                            <span className={""}><FontAwesomeIcon icon={faEnvelope}/> Email: mar.horv22@gmail.com</span>
                            <span><FontAwesomeIcon icon={faBriefcase}/> ICO: 21234761</span>
                        </div>
                    </div>

                    <div className={"text-lg w-full"}>
                        <h3 className={"text-2xl uppercase text-secondary font-bold mb-2"}>{t('socialTitle')}</h3>
                        <div className={"flex flex-row space-x-2 w-full"}>
                            <Link href="https://github.com/MarcelHor" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faGithub}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/marcel-hor/" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

