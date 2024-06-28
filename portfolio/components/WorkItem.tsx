import {useTranslations} from "next-intl";

export default function WorkItem({year, position, company, details}: {
    year: string
    position: string,
    company: string,
    details: string
}) {
    const t = useTranslations('work');

    return (
        <div
            className="flex flex-col mouse-hover border-l-4 border-white border-opacity-5 pl-4 transform transition-transform duration-300 hover:scale-105">
            <p className="text-xl text-secondary font-bold">{t(year)}</p>
            <p className="text-xl font-bold">{t(position)} - {t(company)}</p>
            <p className="text-lg text-gray-400">{t(details)}</p>
        </div>
    );
}