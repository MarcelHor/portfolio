import React from "react";
import FadeIn from "@/components/FadeIn";
import {useTranslations} from "next-intl";
import WorkItem from "@/components/WorkItem";
import valeoLogo from '@/public/valeo_logo.png';
import pragoLogo from '@/public/prago_logo.jpg';
import unknownLogo from '@/public/unknown_logo.svg';
const WorkContent = [
    {
        img: unknownLogo,
        year: "items.0.year",
        position: "items.0.position",
        company: "items.0.company",
        details: "items.0.details"
    },
    {
        img: pragoLogo,
        year: "items.1.year",
        position: "items.1.position",
        company: "items.1.company",
        details: "items.1.details"
    },
    {
        img: unknownLogo,
        year: "items.2.year",
        position: "items.2.position",
        company: "items.2.company",
        details: "items.2.details"
    },
    {
        img: valeoLogo,
        year: "items.3.year",
        position: "items.3.position",
        company: "items.3.company",
        details: "items.3.details"
    }
];



export default function Work() {
    const t = useTranslations('work');

    return (
        <section>
            <FadeIn as={"h2"} className="md:text-5xl text-4xl uppercase font-bold mb-8 text-primary">
                {t('title')}
            </FadeIn>

            <div className="space-y-16">
                {WorkContent.map((work, index) => (
                    <FadeIn key={index} delay={(index + 1) * 0.1}>
                        <WorkItem key={index} {...work} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
