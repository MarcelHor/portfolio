import {useTranslations} from "next-intl";
import Image from "next/image";

export default function WorkItem({img, year, position, company, details}: {
    img: any,
    year: string
    position: string,
    company: string,
    details: string
}) {
    const t = useTranslations('work');

    return (
        <div
            className="flex items-center mouse-hover border-l-4 border-white border-opacity-5 transform transition-transform duration-300 hover:scale-105">
                <Image src={img} alt={t('logoAlt', {company})} className="w-16 h-16 rounded-lg mx-4 object-contain" />
            <div className="flex flex-col">
                <p className="text-xl text-secondary font-bold">{t(year)}</p>
                <p className="text-xl font-bold">{t(position)} - {t(company)}</p>
                <p className="text-lg text-gray-400">{t(details)}</p>
            </div>
        </div>
    );
}