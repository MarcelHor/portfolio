import {faCode, faDesktop, faComments} from "@fortawesome/free-solid-svg-icons";
import FadeIn from "@/components/FadeIn";
import {useTranslations} from 'next-intl';
import ServiceCard from "@/components/ServiceCard";

const services = [
    {
        icon: faDesktop,
        titleKey: "serviceList.0.title",
        descriptionKey: "serviceList.0.description",
    },
    {
        icon: faCode,
        titleKey: "serviceList.1.title",
        descriptionKey: "serviceList.1.description",
    },
    {
        icon: faComments,
        titleKey: "serviceList.2.title",
        descriptionKey: "serviceList.2.description",
    }
];

export default function Services() {
    const t = useTranslations('services');

    return (
        <section className="flex flex-col items-center justify-center scroll-m-32" id={"about"}>
            <FadeIn as={"h2"} className="md:text-5xl text-4xl mb-8 font-bold uppercase text-center">
                {t('title')} <span className="text-primary">{t('title1')}</span> {t('title2')} <span
                className="text-primary">{t('title3')}</span>
            </FadeIn>
            <div
                className="flex flex-col md:flex-row justify-between items-center w-full space-x-0 space-y-8 md:space-x-8 md:space-y-0">
                {services.map((service, index) => (
                    <FadeIn key={index} delay={(index + 1) * 0.1} className={"w-full md:w-1/3 h-80"}>
                        <div
                            className="relative mouse-hover rounded-lg shadow-md border-2 text-center border-white border-opacity-5 w-full h-full px-6 pt-8 pb-24 transform transition-transform duration-300 hover:scale-105">
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                titleKey={service.titleKey}
                                descriptionKey={service.descriptionKey}
                            />
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
