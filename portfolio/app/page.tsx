import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <section
            className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
            <div className="absolute inset-0 grid-pattern"></div>
            <div className="relative z-10 flex flex-col lg:flex-row text-white justify-between items-center w-2/3">
                <div className="flex flex-col justify-center items-start lg:w-2/3">
                    <p className="text-2xl"> Hi there! <span className="wave text-3xl">👋</span></p>
                    <h1 className="text-6xl font-bold mt-2">I&apos;m Marcel Horváth</h1>
                    <p className="text-lg mt-4 font-thin">
                        Need assistance with your project? <span className="font-bold">
                        Let&apos;s talk!</span>
                    </p>
                    <div className="flex justify-center space-x-4 mt-8">
                        <button className="btn btn-primary">Contact me <FontAwesomeIcon icon={faChevronRight}/></button>
                        <button className="btn btn-secondary btn-outline">See my CV <FontAwesomeIcon icon={faChevronRight}/></button>
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
                    <img className="w-96 h-96 rounded-full" src="https://avatars.githubusercontent.com/u/92269810?v=4"
                         alt="Marcel Horváth"/>
                </div>
            </div>
        </section>
    );
}
