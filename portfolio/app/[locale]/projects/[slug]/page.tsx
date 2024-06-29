import {useTranslations} from "next-intl";
import {notFound} from "next/navigation";
import bp from '@/public/bp.png';
import neznamyVlastnik from '@/public/neznamy.png';
import telekonference from '@/public/telekonference.png';
import mapaKriminality from '@/public/policie.png';
import tmobile from '@/public/tmobile.png';
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        slug: 'siprec',
        image: tmobile,
    },
    {
        slug: 'neznamy-vlastnik',
        image: neznamyVlastnik,
    },
    {
        slug: 'tritio-telekonference',
        image: telekonference,
    },
    {
        slug: 'mapa-kriminality-liberec',
        image: mapaKriminality,
    },
    {
        slug: 'inteligentni-system-sledovani-rostlin',
        image: bp,
    }
];

export default function Project({params}: { params: { slug: string } }) {
    const t = useTranslations('projects');

    const project = projects.find(project => project.slug === params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <section
            className={"relative flex flex-col md:flex-row p-4 justify-center items-center space-x-0 space-y-32 md:space-y-0 md:space-x-32 min-h-[calc(100vh-4rem)] w-full max-w-7xl"}>
            <div className="flex flex-col md:w-1/2">
                <FadeIn as={"h1"} className="md:text-5xl text-4xl font-bold uppercase mb-8 text-primary">
                    {t(`items.${params.slug}.name`)}
                </FadeIn>
                <FadeIn className="space-y-4">
                    <p className={"text-lg"}>{t(`items.${params.slug}.description`)} </p>
                    <p className={"text-lg"}>{t(`items.${params.slug}.work`)}</p>
                    <p className={"font-thin"}> <FontAwesomeIcon icon={faMicrochip} className="mr-2"/>
                        {t(`items.${params.slug}.technologies`)}</p>
                </FadeIn>
            </div>
            <FadeIn direction={"left"} className="flex flex-col md:w-1/2 h-full">
                <Image src={project.image} alt={"Project image"}
                       className="w-full h-full object-cover rounded"
                />
            </FadeIn>
        </section>
    );
}