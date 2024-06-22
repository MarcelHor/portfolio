import bp from '@/public/bp.png';
import neznamyVlastnik from '@/public/neznamy.png';
import telekonference from '@/public/telekonference.png';
import mapaKriminality from '@/public/policie.png';
import tmobile from '@/public/tmobile.png';
import Image from "next/image";

const projects = [
    {
        title: 'Siprec',
        description: 'This is a project description',
        image: tmobile,
    },
    {
        title: 'Neznamy-vlastnik.cz',
        description: 'This is a project description',
        image: neznamyVlastnik,
    },
    {
        title: 'Tritio Telekonference',
        description: 'This is a project description',
        image: telekonference,
    },
    {
        title: 'Mapa kriminality Liberec',
        description: 'This is a project description',
        image: mapaKriminality,
    },
    {
        title: 'Inteligentní systém sledování rostlin',
        description: 'This is a project description',
        image: bp,
    }
];

export default function Projects() {
    return (
        <section className="">
            <h2 className="md:text-5xl text-4xl font-bold">Projects</h2>
            <div className="grid grid-cols-3 gap-4 ">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <Image src={project.image} alt={project.title}/>
                        <h2 className="text-xl font-bold">{project.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}