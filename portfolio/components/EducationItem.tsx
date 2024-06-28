import {useTranslations} from "next-intl";

export default function EducationItem({year, institution, details}: { year: string, institution: string, details: string }) {
    const t = useTranslations('education');
    return (
        <div
            className="flex mouse-hover flex-col border-l-4 border-white border-opacity-5 pl-4 transform transition-transform duration-200 hover:scale-105">
            <p className="text-xl font-bold text-secondary">{t(year)}</p>
            <p className="text-xl font-bold">{t(institution)}</p>
            <p className="text-lg text-gray-400">{t(details)}</p>
        </div>
    );
}