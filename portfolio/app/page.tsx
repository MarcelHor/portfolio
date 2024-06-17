import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Grid from "@/components/Grid";
export default function Home() {
    return (
        <section
            className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
            <Grid/>
            <div className="relative z-10 flex flex-col lg:flex-row text-white justify-between items-center w-2/3 pointer-events-none">
                <div className="flex flex-col justify-center items-start lg:w-2/3">
                    <p className="text-2xl"> Hi there!</p>
                    <h1 className="text-6xl font-bold mt-2">I&apos;m Marcel Horváth</h1>
                    <p className="text-lg mt-4 font-thin leading-8">
                        Software engineer with a passion for web development. <br/>
                        I love to create beautiful and functional web applications. <br/>
                    </p>
                    <div className="flex justify-center space-x-4 mt-8">
                        <button className="btn btn-primary">Contact me <FontAwesomeIcon icon={faChevronRight}/></button>
                        <button className="btn btn-secondary btn-outline">See my CV <FontAwesomeIcon
                            icon={faChevronRight}/></button>
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
