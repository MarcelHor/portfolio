import React from "react";
import FadeIn from "@/components/FadeIn";
import EducationItem from "@/components/EducationItem";
import {useTranslations} from "next-intl";

const EducationContent = [
    {
        year: "items.0.year",
        institution: "items.0.institution",
        details: "items.0.details"
    },
    {
        year: "items.1.year",
        institution: "items.1.institution",
        details: "items.1.details"
    },
    {
        year: "items.2.year",
        institution: "items.2.institution",
        details: "items.2.details"
    }
]

export default function Education() {
    const t = useTranslations('education');

    return (
        <section>
            <FadeIn as={"h2"} className="md:text-5xl text-4xl uppercase font-bold mb-8 text-primary">
                {t('title')}
            </FadeIn>
            <div
                className={"flex flex-col md:flex-row md:items-center md:justify-between space-x-0 space-y-16 md:space-y-8 md:space-x-8"}>
                <div className="flex flex-col md:w-1/2">
                    <div className="flex flex-col space-y-16">
                        {EducationContent.map((education, index) => (
                            <FadeIn key={index} delay={(index + 1) * 0.1}>
                                <EducationItem key={index} {...education} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
                <FadeIn className="md:w-1/2 flex flex-col items-center" direction={"left"}>
                    <figure className="flex flex-col items-center">
                        <img
                            src="https://www.tul.cz/wp-content/uploads/2021/03/Sni%CC%81mek-obrazovky-2021-03-24-v-18.36.37-1024x676.png"
                            alt="University of Liberec" width="450px"
                            className="object-contain rounded shadow-md"
                        />
                        <figcaption className="mt-2 italic">{t('caption')}</figcaption>
                    </figure>
                </FadeIn>
            </div>
        </section>
    );
}
