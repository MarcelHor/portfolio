import Image from "next/image";
import bp from '@/public/bp.png';
import neznamyVlastnik from '@/public/neznamy.png';
import telekonference from '@/public/telekonference.png';
import mapaKriminality from '@/public/policie.png';
import tmobile from '@/public/tmobile.png';
import ssgh from '@/public/ssgh.jpg';
import s4c from '@/public/s4c.jpg';
import FadeIn from "@/components/FadeIn";
import {useTranslations} from "next-intl";
import {Link} from "@/lib/navigation";


const projects = [
    {
        title: 'Siprec',
        slug: 'siprec',
        image: tmobile,
    },
    {
        title: 'Neznamy-vlastnik',
        slug: 'neznamy-vlastnik',
        image: neznamyVlastnik,
    },
    {
        title: 'Tritio Telekonference',
        slug: 'tritio-telekonference',
        image: telekonference,
    },
    {
        title: 'Mapa kriminality Liberec',
        slug: 'mapa-kriminality-liberec',
        image: mapaKriminality,
    },
    {
        title: 's4c',
        slug: 's4c',
        image: s4c,
    },
    {
        title: 'Inteligentní systém sledování rostlin',
        slug: 'inteligentni-system-sledovani-rostlin',
        image: bp,
    },
    {
        title: 'ssgh',
        slug: 'ssgh',
        image: ssgh,
    },
];

export default function Projects() {
    const t = useTranslations('projects');
    return (
        <section className="w-full flex flex-col items-center justify-center scroll-m-28" id={"projects"}>
            <FadeIn as={"h2"} className="md:text-5xl text-4xl font-bold text-center uppercase mb-8">
                <span className="text-primary">{t('title')} </span>{t('title1')}
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
                {projects.map((project, index) => (
                    <FadeIn
                        delay={(index + 1) * 0.1}
                        key={index}
                        className={`mouse-hover relative group overflow-hidden ${index === 0 || index === 4 ? 'lg:row-span-2' : ''}`}
                    >
                        <Link href={`/projects/${project.slug}`}>
                            <Image src={project.image} alt={project.title}
                                   className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded"/>
                            <div
                                className="absolute inset-0 bg-primary bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                                <h2 className="text-xl font-bold uppercase">{project.title}</h2>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
