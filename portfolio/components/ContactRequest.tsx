import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function ContactRequest() {
    return (
        <section className={"h-80 flex flex-col bg-opacity-90 items-center justify-center"}>
            <h2 className={"text-5xl mb-8 font-bold uppercase"}>
                Lets work together !
            </h2>
            <button className="btn btn-primary">
                Contact me <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </section>
    );
}