import Grid from "@/components/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <section
                className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
                <Grid/>
                <div className="relative z-10 flex flex-col lg:flex-row text-white justify-between items-center">
                    <div className="flex flex-col justify-center items-start lg:w-2/3">
                        <p className="text-2xl"> Hi there!</p>
                        <h1 className="text-6xl font-bold mt-2">I&apos;m Marcel Horváth</h1>
                        <p className="text-lg mt-4 font-thin leading-8">
                            <span className={"font-semibold"}>Software engineer</span> passionate about web
                            development. <br/>
                            Interested in working together? <span
                            className={"font-semibold"}>Let&apos;s get in touch!</span>
                            <br/>
                        </p>
                        <div className="flex justify-center space-x-4 mt-8">
                            <button className="btn btn-primary">
                                Contact me <FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                            <button className="btn btn-secondary btn-outline">
                                See my CV <FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            <a href="#" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faGithub}/>
                            </a>
                            <a href="#" className="btn btn-ghost btn-circle">
                                <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            className="w-96 h-96 rounded-full"
                            src="https://avatars.githubusercontent.com/u/92269810?v=4"
                            alt="Marcel Horváth"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center w-full h-screen py-8">
                <h2 className="text-4xl font-bold">About me</h2>
                <p className="text-lg font-thin mt-4 text-center max-w-3xl">
                    I&apos;m a software engineer with a passion for web development. I&apos;ve been working with
                    JavaScript and TypeScript for a few years now and I&apos;m always eager to learn new things.
                    I&apos;m currently studying computer science at the University of Pécs.
                </p>
            </section>
        </div>
    );
}
