import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faDesktop, faComments} from "@fortawesome/free-solid-svg-icons";


const services = [
    {
        icon: faDesktop,
        title: "Software Solutions",
        description: "Offering both project-based work and long-term collaborations to build your custom software.",
    },
    {
        icon: faCode,
        title: "Web Development",
        description: "Frontend and backend development, creating modern and responsive web applications.",
    },
    {
        icon: faComments,
        title: "Consultation & Chat",
        description: "Available for consultation or just a chat to discuss your ideas and goals.",
    }
];

const ServiceCard = ({icon, title, description}: { icon: any, title: string, description: string }) => (
    <div
        className="relative rounded-lg shadow-md border-2 text-center border-white border-opacity-5 w-full md:w-1/3 h-80 px-6 pt-8 pb-24 transform transition-transform duration-300 hover:scale-105">
        <FontAwesomeIcon icon={icon} size={"3x"} className={"mb-2"}/>
        <h3 className="text-2xl font-bold mb-8 ">{title}</h3>
        <p>{description}</p>
        <div className="absolute bottom-0 left-0 right-0 my-8 mx-16 flex justify-center items-center space-x-4">
            <span className={"opacity-10"}>&lt;&gt;</span>
            <hr className="border-2 border-white border-opacity-10 w-full"/>
            <span className={"opacity-10"}>&lt;/&gt;</span>
        </div>

    </div>
);

export default function Services() {
    return (
        <section className="flex flex-col items-center justify-center scroll-m-32" id={"about"}>
            <h2 className="md:text-5xl text-4xl mb-8 font-bold uppercase">How I Can <span
                className="text-primary">Support</span> Your Success ?</h2>
            <div
                className="flex flex-col md:flex-row justify-between items-center w-full space-x-0 space-y-8 md:space-x-8 md:space-y-0">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
}
