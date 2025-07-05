import {useTranslations} from "next-intl";
import Image from "next/image";

export default function EducationItem({img, year, institution, details}: {img: any, year: string, institution: string, details: string }) {
    const t = useTranslations('education');
    return (
        <div
            className="flex mouse-hover border-l-4 border-white border-opacity-5 transform transition-transform duration-200 hover:scale-105">
            <Image src={img} alt={t(institution)} className="w-16 h-16 rounded-lg mx-4 object-contain" />
            <div className="flex flex-col">
                <p className="text-xl font-bold text-secondary">{t(year)}</p>
                <p className="text-xl font-bold">{t(institution)}</p>
                <p className="text-lg text-gray-400">{t(details)}</p>
            </div>
        </div>
    );
}