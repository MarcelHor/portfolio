import Grid from "@/components/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link} from "@/lib/navigation";
import Image from "next/image"
import me from "@/public/me.png"

import FadeIn from "@/components/FadeIn";
import {useTranslations} from 'next-intl';

export default function LandingPage() {
    const t = useTranslations('landingPage');
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] w-full border-b-2 border-opacity-5 border-white scroll-my-96"
            id={"home"}>
            <Grid/>
            <div className="z-10 flex flex-col md:flex-row justify-between items-center p-4 w-full max-w-7xl mx-auto">
                <div
                    className="flex flex-col justify-center items-start lg:w-1/2 p-4">
                    <FadeIn as={"p"} delay={0} className="text-xl">{t('hello')}</FadeIn>
                    <FadeIn as={"h1"} delay={0.1}
                            className="text-3xl lg:text-6xl font-bold mt-2">{t('imMarcel')}</FadeIn>
                    <FadeIn as={"p"} delay={0.2} className="text-lg mt-4 font-thin leading-8">
                        <span className="font-semibold">{t('engineer')}</span> {t('description')}<br/>
                        {t('description2')} <span
                        className="font-semibold">{t('contact')}</span>
                        <br/>
                    </FadeIn>
                    <FadeIn delay={0.3} className="flex justify-start space-x-4 mt-8">
                        <Link href={"/#contact"} className="btn btn-primary">
                            {t('contactButton')} <FontAwesomeIcon icon={faChevronRight}/>
                        </Link>
                        <Link
                            href={"https://drive.google.com/file/d/19nLrd4T0Yg6BAc3D0vwQ7tZnbTTY6dOc/view?usp=sharing"}
                            className="btn btn-secondary btn-outline">
                            {t('seeMyCV')} <FontAwesomeIcon icon={faChevronRight}/>
                        </Link>
                    </FadeIn>
                    <FadeIn delay={0.4} className="flex justify-start mt-8 space-x-2">
                        <Link href="https://github.com/MarcelHor" className="btn btn-ghost btn-circle">
                            <FontAwesomeIcon size="2x" icon={faGithub}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/marcel-hor/" className="btn btn-ghost btn-circle">
                            <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                        </Link>
                    </FadeIn>
                </div>
                <FadeIn direction={"left"} className="relative flex justify-center items-center md:w-1/2 p-4">
                    <Image
                        src={me}
                        alt="Marcel Horváth"
                    />
                </FadeIn>
            </div>
        </section>
    );
}
